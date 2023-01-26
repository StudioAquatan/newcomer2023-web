import { css } from "@emotion/react";

const base = css`
  margin-bottom: 4rem;
`;

const contentPStyle = css`
  margin: 0;
  font-size: 1.6rem;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 280px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 480px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

const logoStyle = css`
  height: 2rem;
  margin: 0 0.4rem;
  vertical-align: middle;

  @media screen and (min-width: 280px) {
    height: 2rem;
    margin: 0 0.4rem;
  }
  @media screen and (min-width: 480px) {
    height: 3rem;
    margin: 0 0.8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 4rem;
    margin: 0 1rem;
  }
  @media screen and (min-width: 1024px) {
    height: 4.8rem;
    margin: 0 1rem;
  }
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
