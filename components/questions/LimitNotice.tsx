import { css } from "@emotion/react";
import {
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalTitle,
} from "../modal";

const textStyle = css`
  font-size: 1.5rem;
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
};
export default function LimitNotice({ remain, back, close }: Props) {
  return (
    <>
      <ModalTitle>再診断の確認</ModalTitle>
      <ModalContent>
        <p css={textStyle}>
          診断できる回数には制限があります． <wbr />
          あと
          <span css={remainStyle}>{remain}回</span>
          診断できます．
          <wbr />
        </p>
        <p css={textStyle}>続けますか？</p>
      </ModalContent>
      <ModalButtonContainer>
        <ModalButton label="戻る" onClick={back} />
        <ModalButton label="続ける" onClick={close} />
      </ModalButtonContainer>
    </>
  );
}
