import { css, keyframes } from "@emotion/react";
import Piece from "./Piece";

const base = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const fall = keyframes`
  0% {
    transform: translate(0%, 0);
  }
  25% {
    transform: translate(-200%, 25%);
  }
  50% {
    transform: translate(0%, 50%);
  }
  75% {
    transform: translate(200%, 75%);
  }
  100% {
    transform: translate(0%, 100%);
  }
`;

const piece = css`
  position: absolute;
  height: 100%;
  margin-left: 50%; /* 画面中央に配置する */
  animation: ${fall} linear infinite;
  animation-duration: 2s;
`;

export default function Confetti() {
  return (
    <div css={base}>
      <div css={piece}>
        <Piece color="#ff0000" width="10px" height="10px" />
      </div>
    </div>
  );
}
