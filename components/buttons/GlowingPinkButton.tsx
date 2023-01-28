import { css } from "@emotion/react";
import Link from "next/link";

type GlowingPinkButtonProps = {
  text: string;
  href: string;
  query?: { [key: string]: string };
};

const button = css`
  padding: 1.6rem 4rem;
  font-size: 2.5rem;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #ffc8df;
  border: 0;
  border-radius: 4.8rem;
  box-shadow: rgb(0 0 0 / 5%) 0 0 1rem;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 0.5rem;
    background-color: #fff;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 0.5rem 3rem 0;
  }

  &:active {
    letter-spacing: 0.5rem;
    background-color: #ffc8df;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 0 0 0;
    transition: 100ms;
    transform: translateY(1rem);
  }
`;

export default function GlowingPinkButton({
  text,
  href,
  query = {},
}: GlowingPinkButtonProps) {
  return (
    <Link href={{ pathname: href, query: query }}>
      <button css={button}>{text}</button>
    </Link>
  );
}
