import { css } from "@emotion/react";

import Organizations from "./Organizations";

const heroStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: rgb(0 0 0 / 30%);
  background-image: url("/toppage/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
`;

const heroContentStyle = css`
  font-size: 3.2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 280px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: 480px) {
    font-size: 4.8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 6.4rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 8rem;
  }
`;

const contentPStyle = css`
  margin: 0;
`;

export default function Hero() {
  return (
    <div css={heroStyle}>
      <Organizations />
      <div css={heroContentStyle}>
        <p css={contentPStyle}>部活動相性診断</p>
        <p css={contentPStyle}>×</p>
        <p css={contentPStyle}>スタンプラリー</p>
      </div>
    </div>
  );
}
