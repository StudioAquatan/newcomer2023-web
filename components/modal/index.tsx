import React from "react";
import Modal from "./Modal";

export function useModal() {
  const [isOpen, setOpen] = React.useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const ModalWrapper = React.useCallback(
    ({ children }: React.PropsWithChildren) => {
      return isOpen ? <Modal>{children}</Modal> : null;
    },
    [isOpen]
  );

  return { open, close, ModalWrapper };
}

export {
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalTitle,
} from "./Modal";
