import { css, Theme } from "@emotion/react";
import Link from "next/link";

export type LinkData = {
  href: string;
  external?: boolean;
};

export type ColumnItemType = {
  label: string;
  link: LinkData;
};

type ColumnProps = {
  title: string;
  items: ColumnItemType[];
};

const titleStyle = (theme: Theme) => css`
  padding-bottom: 0.5rem;
  margin: 0;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.normalTextColor};
  border-bottom: 1px solid #000;
`;

const contents = css`
  display: flex;
  flex-direction: column;
`;

const linkListStyle = css`
  padding: 0;
  padding-left: 1.6rem;
  margin: 0;
  font-size: 1.6rem;
  list-style: none;
`;

const linkStyle = css`
  margin-bottom: 1rem;
  font-family: GenShinGothic-P, sans-serif;
`;

const ColumnItem = ({ label, link }: ColumnItemType) => {
  return (
    <li css={linkStyle}>
      {link.external ? (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={link.href}>{label}</Link>
      )}
    </li>
  );
};

export default function Column({ title, items }: ColumnProps) {
  return (
    <div>
      <p css={titleStyle}>{title}</p>
      <div css={contents}>
        <ul css={linkListStyle}>
          {items.map((item, index) => (
            <ColumnItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
