import { css } from "@emotion/react";
import React from "react";
import ColorBorderButton from "../buttons/ColorBorderButton";

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 30%);
`;

const modal = css`
  display: flex;
  flex-direction: column;
  width: calc(min(500px, 100vw));
  min-height: 20vh;
  padding: 1rem 2rem;
  background-color: rgb(255 255 255 / 98%);
  border: 3px solid rgb(0 0 0 / 40%);
  border-radius: 8px;
  box-shadow: 0 0 8px rgb(255 255 255 / 30%);

  @media screen and (max-width: 500px) {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }
`;

const modalTitle = css`
  margin: 0;
  font-size: 3rem;
  font-style: bold;
  border-bottom: 1.5px solid rgb(0 0 0 / 40%);
`;

const modalContent = css`
  flex-grow: 1;
`;

const modalButtons = css`
  display: flex;
  flex-direction: row;
`;

const modalButtonOverride = css`
  flex-grow: 1;
  padding: 0.5rem 4rem;
  margin-inline: 0.2rem;
  margin-bottom: 0.3rem;
`;

export function ModalButton(
  props: React.ComponentProps<typeof ColorBorderButton>
) {
  return <ColorBorderButton css={modalButtonOverride} {...props} />;
}

export function ModalTitle({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLParagraphElement>>) {
  return (
    <p css={modalTitle} {...props}>
      {children}
    </p>
  );
}

export function ModalContent({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div css={modalContent} {...props}>
      {children}
    </div>
  );
}

export function ModalButtonContainer({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div css={modalButtons} {...props}>
      {children}
    </div>
  );
}

export default function Modal({ children }: React.PropsWithChildren) {
  return (
    <div css={overlay}>
      <div css={modal}>{children}</div>
    </div>
  );
}
