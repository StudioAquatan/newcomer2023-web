import { css, Theme, useTheme } from "@emotion/react";
import Link from "next/link";

const container = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: ${theme.colors.normalTextColor};
  background-color: transparent;

  a {
    color: ${theme.colors.normalTextColor};
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

const siteNameStyle = css`
  padding: 0;
  margin: 0;
  font-size: 2rem;
`;

const navItemsStyle = css`
  margin: 0 0 0 auto;

  & > ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & > ul > li {
    display: inline;
    margin: 0 0 0 3rem;
    font-size: 1.6rem;
  }
`;

export type HeaderProps = {
  isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
  const theme = useTheme();

  return (
    <header css={container(theme)}>
      <h1 css={siteNameStyle}>
        <Link href="/">京都工芸繊維大学 新歓サイト</Link>
      </h1>
      <nav css={navItemsStyle}>
        <ul>
          <li>
            <a href="">新歓について</a>
          </li>
          <li>
            <Link href="/orgs">団体一覧</Link>
          </li>
          {isMobile && (
            <>
              <li>
                <Link href="/stampcard">スタンプカード</Link>
              </li>
              <li>
                <Link href="/diagnose">診断を始める</Link>
              </li>
            </>
          )}
          {!isMobile && (
            <>
              <li>
                <p>スマホからアクセスして診断を始めてみよう！</p>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
