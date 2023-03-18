import { css, Theme } from "@emotion/react";
import {
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalTitle,
} from "../modal";

const titleStyle = (theme: Theme) => css`
  color: ${theme.colors.normalTextColor};
`;
const textStyle = (theme: Theme) => css`
  font-size: 1.5rem;
  color: ${theme.colors.normalTextColor};
`;

const remainStyle = css`
  display: block;
  font-size: 3.5rem;
  text-align: center;
`;
type Props = {
  remain: number;
  back: () => void;
  close: () => void;
  type: "rediag" | "exclusion";
};

export default function LimitNotice({ remain, back, close, type }: Props) {
  return (
    <>
      <ModalTitle css={titleStyle}>
        {remain > 0
          ? `${type === "rediag" ? "再診断" : "除外"}の確認`
          : "おっと？"}
      </ModalTitle>
      <ModalContent>
        {remain > 0 ? (
          <>
            <p css={textStyle}>
              {type === "rediag" ? "診断" : "団体を除外"}
              できる回数には制限があります． <wbr />
              <span css={remainStyle}>残り{remain}回</span>
            </p>
            <p css={textStyle}>続けますか？</p>
          </>
        ) : (
          <p css={textStyle}>
            {type === "rediag" ? "診断" : "団体を除外"}できる回数を越えたため、
            もう{type === "rediag" ? "診断" : "除外"}することができません
          </p>
        )}
      </ModalContent>
      <ModalButtonContainer>
        <ModalButton label="戻る" onClick={back} />
        <ModalButton label="続ける" onClick={close} disabled={remain === 0} />
      </ModalButtonContainer>
    </>
  );
}
