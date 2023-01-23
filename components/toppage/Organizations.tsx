import { css } from "@emotion/react";

const base = css`
  margin-bottom: 4rem;
`;

const contentPStyle = css`
  margin: 0;
  font-size: 1rem;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 280px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const logoStyle = css`
  height: 1.8rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
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
