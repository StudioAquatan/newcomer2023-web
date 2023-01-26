import { css } from "@emotion/react";

type ColumnProps = {
  title: string;
  links: { text: string; href: string }[];
};

const titleStyle = css`
  padding-bottom: 0.5rem;
  margin: 0;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
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
`;

export default function Column({ title, links }: ColumnProps) {
  return (
    <div>
      <p css={titleStyle}>{title}</p>
      <div css={contents}>
        <ul css={linkListStyle}>
          {links.map((link, index) => (
            <li key={index} css={linkStyle}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
