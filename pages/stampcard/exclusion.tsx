import { css, useTheme } from "@emotion/react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RecommendationItem } from "../../api-client/@types";
import MetaHead from "../../components/MetaHead";
import ColorBorderButton from "../../components/buttons/ColorBorderButton";
import JumpingLogoLoader from "../../components/loaders/JumpingLogoLoader";
import { useModal } from "../../components/modal";
import LimitNotice from "../../components/questions/LimitNotice";
import { useOrganizations } from "../../hooks/organizations";
import {
  isRecommendationReady,
  NoRecommendation,
  useExcludeRecommendation,
  useRecommendation,
} from "../../hooks/recommendation";
import imgixLoader from "../../image-loader";

const headerContainer = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  p {
    margin: 0;
  }
`;

const listContainer = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

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

const iconMargin = css`
  margin-left: 1rem;
`;

const linkStyle = css`
  padding: 3rem 0;
  font-size: 2rem;
  color: rgba(0 0 0 / 95%);
`;

export default function ExclusionPage() {
  const { data: recommendation, isLoading } = useRecommendation();
  const { push } = useRouter();
  const orgMap = useOrganizations().data?.organizationsMap;
  const theme = useTheme();
  const [, setMutating] = useState(false);
  const [currentOrgId, setOrgId] = useState("");
  const { ModalWrapper, open, close } = useModal();
  const exclude = useExcludeRecommendation();

  React.useEffect(() => {
    if (recommendation === NoRecommendation) {
      push("/");
    }
  }, [push, recommendation]);

  if (isLoading || !orgMap) {
    return (
      <>
        <MetaHead title="除外団体の設定" description="除外団体を設定します" />
        <JumpingLogoLoader label="読み込み中..." pageMode />
      </>
    );
  }

  if (!isRecommendationReady(recommendation)) {
    return null;
  }

  const excludedOrgs = recommendation.recommendation.orgs.filter(
    ({ isExcluded, stampSlot }) => isExcluded || stampSlot >= 0
  );

  const handleToggle = async (org: RecommendationItem) => {
    if (org.isExcluded) {
      setMutating(true);
      await exclude("remove", org.org.id);
    } else {
      // 確認を開く
      open();
      setOrgId(org.org.id);
    }
    setMutating(false);
  };

  // 確認OK
  const handleAdd = async () => {
    setMutating(true);
    close();
    await exclude("add", currentOrgId);
    setMutating(false);
  };

  return (
    <>
      <MetaHead title="除外団体の設定" description="除外団体を設定します" />
      <ModalWrapper>
        <LimitNotice
          type="exclusion"
          remain={recommendation.recommendation.ignoreRemains}
          close={handleAdd}
          back={close}
        />
      </ModalWrapper>
      <div css={headerContainer}>
        <h1>除外団体の設定</h1>
        <p>ここで指定した団体はスタンプカードに表示されなくなります</p>
        <p>(最大5団体)</p>
      </div>
      <div css={listContainer}>
        {excludedOrgs.map((item) => {
          const org = orgMap.get(item.org.id);
          if (!org) return null;

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
                  onClick={() => handleToggle(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div css={headerContainer}>
        <Link css={linkStyle} href="/stampcard">
          <FontAwesomeIcon icon={faChevronLeft} css={iconMargin} />
          スタンプカードに戻る
        </Link>
      </div>
    </>
  );
}
