import { css } from "@emotion/react";
import { useEffect } from "react";
import { useError } from "../../store/error";
import {
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalTitle,
  useModal,
} from "../modal";

const textStyle = css`
  font-size: 1.8rem;
`;

const errorStyle = css`
  padding-left: 1rem;
  font-size: 1.2rem;
  color: #aaa;
  border-left: 2px solid #aaa;
`;

export default function ErrorModal() {
  const { error, reset } = useError();
  const { ModalWrapper, open, close } = useModal();

  useEffect(() => {
    if (error) open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleClose = () => {
    close();
    reset();
  };

  return (
    <ModalWrapper>
      <ModalTitle>おや？</ModalTitle>
      <ModalContent>
        <p css={textStyle}>
          想定されていないエラーが発生しました．再読み込みしてみてください．
        </p>
        <p css={errorStyle}>{error?.message ?? "不明"}</p>
      </ModalContent>
      <ModalButtonContainer>
        <ModalButton label="閉じる" onClick={handleClose} />
      </ModalButtonContainer>
    </ModalWrapper>
  );
}
