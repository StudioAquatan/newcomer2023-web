import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { RecommendationItem } from "../../api-client/@types";
import { useOrganizations } from "../../hooks/organizations";
import { useExcludeRecommendation } from "../../hooks/recommendation";
import imgixLoader from "../../image-loader";
import ColorBorderButton from "../buttons/ColorBorderButton";
import { useModal } from "../modal";
import LimitNotice from "../questions/LimitNotice";

const orgStyle = css`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: min(90vw, 500px);
  margin: 1.5rem;
`;

const orgTitle = css`
  font-size: 1.8rem;
`;

const opsStyle = css`
  flex-grow: 1;
`;

const logoStyle = (logoFocus: boolean) => css`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  object-fit: ${logoFocus ? "cover" : "contain"};
`;

const buttonStyle = css`
  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 3px;

  &:active {
    transform: unset;
  }
`;

type Props = { item: RecommendationItem; excludeRemain: number };
export default function ExclusionPanel({ item, excludeRemain }: Props) {
  const orgMap = useOrganizations().data?.organizationsMap;
  const theme = useTheme();
  const [, setMutating] = useState(false);
  const { ModalWrapper, open, close } = useModal();
  const exclude = useExcludeRecommendation();

  const org = orgMap?.get(item.org.id);
  if (!org) return null;

  const handleToggle = async () => {
    if (item.isExcluded) {
      setMutating(true);
      await exclude("remove", item.org.id);
    } else {
      // 確認を開く
      open();
    }
    setMutating(false);
  };

  // 確認OK
  const handleAdd = async () => {
    setMutating(true);
    close();
    await exclude("add", item.org.id);
    setMutating(false);
  };

  return (
    <div key={item.org.id} css={orgStyle}>
      {org.logo && (
        <Image
          src={org.logo?.src}
          alt={org.fullName}
          loader={imgixLoader}
          width={100}
          height={100}
          css={logoStyle(org.logoFocus ?? false)}
        />
      )}
      <div css={opsStyle}>
        <h2 css={orgTitle}>{org.fullName}</h2>
        <ColorBorderButton
          label={item.isExcluded ? "スタンプに含める" : "除外する"}
          fontSize="1.5rem"
          textColor={
            item.isExcluded
              ? theme.colors.button.enable.textColor
              : theme.colors.button.disable.textColor
          }
          borderColor={
            item.isExcluded
              ? theme.colors.button.enable.textColor
              : theme.colors.button.disable.textColor
          }
          css={buttonStyle}
          onClick={handleToggle}
        />
      </div>
      <ModalWrapper>
        <LimitNotice
          type="exclusion"
          remain={excludeRemain}
          close={handleAdd}
          back={close}
        />
      </ModalWrapper>
    </div>
  );
}
