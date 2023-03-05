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
  background-color: rgb(0 0 0 / 30%);
  background-image: url("/toppage/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
`;

const heroContentStyle = css`
  font-size: calc(3.2rem + 2vw);
  font-weight: bold;
  color: #fff;
  text-align: center;
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
          <FontAwesomeIcon icon={faXmark} />
        </p>
        <p css={contentPStyle}>スタンプラリー</p>
      </div>
    </div>
  );
}
