import { css } from "@emotion/react";
import Link from "next/link";

type UnderlineButtonProps = {
  text: string;
  href: string;
  query?: { [key: string]: string };
};

const button = () => {
  return css`
    position: relative;
    padding: 0;
    font-family: GenJyuuGothic-P, sans-serif;
    font-size: 2.5rem;
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
  text,
  href,
  query = {},
}: UnderlineButtonProps) {
  return (
    <Link href={{ pathname: href, query: query }}>
      <button css={button}>{text}</button>
    </Link>
  );
}
