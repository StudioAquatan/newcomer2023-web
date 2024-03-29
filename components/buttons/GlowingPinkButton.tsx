import { css, Theme } from "@emotion/react";
import Link from "next/link";

type GlowingPinkButtonProps = {
  text?: string;
  href?: string;
  query?: { [key: string]: string };
  type?: string;
};

const button = (theme: Theme) => {
  return css`
    padding: 1.6rem 4rem;
    font-family: GenJyuuGothic-P, sans-serif;
    font-size: 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${theme.colors.button.enable.backgroundColor};
    border: 0;
    border-radius: 4.8rem;
    box-shadow: rgb(0 0 0 / 5%) 0 0 1rem;
    transition: all 0.5s ease;

    &:hover {
      background-color: #fff;
      box-shadow: ${theme.colors.button.enable.backgroundColor} 0 0.5rem 3rem 0;
    }

    &:active {
      background-color: ${theme.colors.button.enable.backgroundColor};
      box-shadow: ${theme.colors.button.enable.backgroundColor} 0 0 0 0;
      transition: 100ms;
      transform: translateY(1rem);
    }
  `;
};

export default function GlowingPinkButton({
  text,
  href,
  query = {},
  type,
}: GlowingPinkButtonProps) {
  if (type === "submit") {
    return (
      <button css={button} type="submit">
        {text}
      </button>
    );
  } else {
    return (
      <Link href={{ pathname: href, query: query }}>
        <button css={button}>{text}</button>
      </Link>
    );
  }
}
