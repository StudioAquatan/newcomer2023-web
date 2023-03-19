import { useEffect } from "react";
import { useError } from "../../store/error";
import {
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalTitle,
  useModal,
} from "../modal";

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
        <p>想定されていないエラーが発生しました</p>
        <p>{error?.message ?? "不明"}</p>
      </ModalContent>
      <ModalButtonContainer>
        <ModalButton label="閉じる" onClick={handleClose} />
      </ModalButtonContainer>
    </ModalWrapper>
  );
}
