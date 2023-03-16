import { css, Theme, useTheme, Interpolation } from "@emotion/react";

type ColorBorderButtonProps = {
  label: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: string;
  type?: string;
  disabled?: boolean;
  css?: Interpolation<Theme>;
};

const button = (
  theme: Theme,
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

    &:disabled {
      color: ${theme.colors.button.disable.backgroundColor};
      border: 3px ${theme.colors.button.disable.backgroundColor} solid;
      transition: none;
      transform: none;
    }
  `;
};

export default function ColorBorderButton({
  label,
  textColor,
  borderColor,
  fontSize,
  type,
  disabled = false,
  css,
}: ColorBorderButtonProps) {
  const theme = useTheme();
  if (disabled)
    return (
      <button
        css={[css, button(theme, fontSize, textColor, borderColor)]}
        disabled
      >
        {label}
      </button>
    );
  else if (type === "submit") {
    return (
      <button
        css={[css, button(theme, fontSize, textColor, borderColor)]}
        type="submit"
      >
        {label}
      </button>
    );
  } else {
    return (
      <button css={[css, button(theme, fontSize, textColor, borderColor)]}>
        {label}
      </button>
    );
  }
}
