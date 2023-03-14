import { css } from "@emotion/react";

type ColorBorderButtonProps = {
  label: string;
  color: string;
  fontSize?: string;
};

const button = (fontSize?: string, color?: string) => {
  return css`
    padding: 0.4rem 1.6rem;
    font-size: ${fontSize ?? "2.5rem"};
    font-weight: bold;
    color: ${color ?? "#000"};
    text-align: center;
    cursor: pointer;
    background-color: white;
    border: 2px ${color ?? "#000"} solid;
    border-radius: 0.8rem;
    transition: all 100ms ease-out 0s;

    &:hover {
      background-color: #eee;
    }

    &:active {
      transition: 100ms;
      transform: translateY(1rem);
    }
  `;
};

export default function ColorBorderButton({
  label,
  color,
  fontSize,
}: ColorBorderButtonProps) {
  return <button css={button(fontSize, color)}>{label}</button>;
}
