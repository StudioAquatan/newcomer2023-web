import { css } from "@emotion/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Organizations from "./Organizations";

const heroStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: rgb(0 0 0 / 10%);
  background-image: url("/toppage/hero.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;

  /* スマホで虹の塔がちょうどいい感じの場所に来るように */
  @media screen and (max-width: 768px) {
    background-position: -300px;
  }
`;

const heroContentStyle = css`
  font-size: calc(3.2rem + 2vw);
  font-weight: bold;
  color: #333;
  text-align: center;
  text-shadow: 2px 2px 2px #fff, -2px 2px 2px #fff, 2px -2px 2px #fff,
    -2px -2px 2px #fff;
`;

const xmarkStyle = css`
  height: 1em;
  filter: drop-shadow(1px 1px 1px #fff) drop-shadow(-1px 1px 1px #fff)
    drop-shadow(1px -1px 1px #fff) drop-shadow(-1px -1px 1px #fff);
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
        <p css={contentPStyle}>
          <FontAwesomeIcon css={xmarkStyle} icon={faXmark} />
        </p>
        <p css={contentPStyle}>スタンプラリー</p>
      </div>
    </div>
  );
}
