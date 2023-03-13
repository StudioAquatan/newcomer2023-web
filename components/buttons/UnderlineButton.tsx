import { css } from "@emotion/react";

type UnderlineButtonProps = {
  label: string;
  fontSize?: string;
};

const button = (fontSize?: string) => {
  return css`
    position: relative;
    padding: 0;
    font-family: GenJyuuGothic-P, sans-serif;
    font-size: ${fontSize ?? "2.5rem"};
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;

    &:focus,
    &:hover {
      color: #000;
    }

    &::after {
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0%;
      height: 1px;
      pointer-events: none;
      content: "";
      background-color: #000;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }

    &:focus::after,
    &:hover::after {
      left: 0%;
      width: 100%;
    }
  `;
};

export default function UnderlineButton({
  label,
  fontSize,
}: UnderlineButtonProps) {
  return <button css={button(fontSize)}>{label}</button>;
}
