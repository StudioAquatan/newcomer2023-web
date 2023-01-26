import { css } from "@emotion/react";
import Column from "./Column";
import OfficialAccounts from "./OfficialAccounts";

const footerStyle = css`
  width: 100%;
  background-color: #e7e7e7;
`;

const container = css`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
`;

const organization = css`
  margin: 0;
  margin-bottom: 3.2rem;
  font-size: 2.4rem;

  & > span {
    display: inline-block;
  }
`;

const contents = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3.2rem;
  max-width: 1000px;
`;

const copyright = css`
  margin: 0;
  margin-top: 3.2rem;
  font-size: 1.3rem;
`;

const providerColumn = {
  title: "提供",
  links: [
    { text: "あくあたん工房", href: "" },
    { text: "企画部irodori", href: "" },
  ],
};

const otherColumn = {
  title: "その他",
  links: [{ text: "プライバシーポリシー", href: "" }],
};

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={container}>
        <p css={organization}>
          <span>京都工芸繊維大学</span>
          <span>新入生歓迎企画運営委員会</span>
        </p>
        <div css={contents}>
          <OfficialAccounts />
          <Column {...providerColumn} />
          <Column {...otherColumn} />
        </div>
        <p css={copyright}>
          © 2023 京都工芸繊維大学学友会新入生歓迎企画運営委員会 All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
