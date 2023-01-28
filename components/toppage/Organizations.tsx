import { css } from "@emotion/react";

const base = css`
  margin-bottom: 4rem;
`;

const contentPStyle = css`
  margin: 0;
  font-size: calc(1.6rem + 1vw);
  color: #fff;
  text-align: center;
`;

const logoStyle = css`
  height: calc(2rem + 1vw);
  margin: 0 calc(0.4rem + 0.5vw);
  vertical-align: middle;
`;

export default function Organizations() {
  return (
    <div css={base}>
      <p css={contentPStyle}>新歓委員会 with</p>
      <p css={contentPStyle}>
        <img src="/toppage/irodori.png" alt="irodori" css={logoStyle}></img>
        irodori ×{" "}
        <img
          src="/toppage/studioaquatan.png"
          alt="あくあたん工房"
          css={logoStyle}
        ></img>
        あくあたん工房{" "}
      </p>
    </div>
  );
}