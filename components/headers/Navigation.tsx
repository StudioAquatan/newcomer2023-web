import { css, Theme } from "@emotion/react";
import Link from "next/link";

export type LinkData = {
  href: string;
  external?: boolean;
};

export type HeaderData = {
  label: string;
  targetDevice?: "mobile" | "desktop";
  link?: LinkData;
};

const navMenuItemsStyle = (theme: Theme) => css`
  margin: 0 0 0 auto;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: inline;
    margin: 0 0 0 3rem;
    font-size: 1.6rem;
  }

  a {
    color: ${theme.colors.normalTextColor};
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

export type LinkItemProps = {
  headerData: HeaderData;
  isMobile: boolean;
};

export const LinkItem = ({ headerData, isMobile }: LinkItemProps) => {
  const { label, targetDevice, link } = headerData;

  if (targetDevice === "mobile" && !isMobile) {
    return null;
  }
  if (targetDevice === "desktop" && isMobile) {
    return null;
  }

  return (
    <li key={label}>
      {link ? (
        link.external ? (
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ) : (
          <Link href={link.href}>{label}</Link>
        )
      ) : (
        // リンク先がない場合は、pタグでラベルを表示する
        <p>{label}</p>
      )}
    </li>
  );
};

type MenuButtonsProps = {
  headersData: HeaderData[];
  isMobile: boolean;
};

export const MenuButtons = ({ headersData, isMobile }: MenuButtonsProps) => {
  return (
    <nav css={navMenuItemsStyle}>
      <ul>
        {headersData.map((data, index) => {
          return <LinkItem key={index} headerData={data} isMobile={isMobile} />;
        })}
      </ul>
    </nav>
  );
};
