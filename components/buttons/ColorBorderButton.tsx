import { css } from "@emotion/react";

type ColorBorderButtonProps = {
  label: string;
  textColor: string;
  borderColor: string;
  fontSize?: string;
  type?: string;
};

const button = (
  fontSize?: string,
  textColor?: string,
  borderColor?: string
) => {
  return css`
    padding: 1.6rem 4rem;
    font-family: GenJyuuGothic-P, sans-serif;
    font-size: ${fontSize ?? "2.5rem"};
    font-weight: bold;
    color: ${textColor ?? "#000"};
    text-align: center;
    cursor: pointer;
    background-color: white;
    border: 3px ${borderColor ?? "#000"} solid;

    /* border-radius: 0.8rem; */
    border-radius: 4.8rem;
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
  textColor,
  borderColor,
  fontSize,
  type,
}: ColorBorderButtonProps) {
  if (type === "submit") {
    return (
      <button css={button(fontSize, textColor, borderColor)} type="submit">
        {label}
      </button>
    );
  } else {
    return (
      <button css={button(fontSize, textColor, borderColor)}>{label}</button>
    );
  }
}
