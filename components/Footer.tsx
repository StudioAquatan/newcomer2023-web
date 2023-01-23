import { css } from "@emotion/react";

const footerStyle = css`
  width: 100%;
  background-color: #e7e7e7;
`;

const content = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const organization = css`
  margin: 0;
  font-size: 1.5rem;
`;

const providers = css`
  margin: 0;
  font-size: 1.2rem;
`;

const snsList = css`
  padding: 0;
  padding-left: 1rem;
  list-style: none;
`;

const snsLink = css`
  text-decoration: none;
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={content}>
        <div>
          <p css={organization}>京都工芸繊維大学新入生歓迎企画運営委員会</p>
          <ul css={snsList}>
            <li>
              Twitter:{" "}
              <a href="" css={snsLink}>
                @hogehoge
              </a>
            </li>
            <li css={snsLink}>
              Instagram:{" "}
              <a href="" css={snsLink}>
                @hogehoge
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p css={providers}>提供</p>
          <ul css={snsList}>
            <li>
              <a href="" css={snsLink}>
                あくあたん工房
              </a>
            </li>
            <li css={snsLink}>
              <a href="" css={snsLink}>
                企画部irodori
              </a>
            </li>
          </ul>
        </div>
        <p>
          © 2023 京都工芸繊維大学学友会新入生歓迎企画運営委員会 All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
