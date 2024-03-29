import { css, keyframes, SerializedStyles } from "@emotion/react";

export type PieceProps = {
  overrideCss?: SerializedStyles;
  color: string;
  width: string;
  height: string;
};

const pieceRotate = keyframes`
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  25% {
    transform: rotate3d(1, 1, 1, 90deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  75% {
    transform: rotate3d(1, 1, 1, 270deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 359deg);
  }
`;

const base = ({ width, height }: { width: string; height: string }) => css`
  transform-style: preserve-3d;
  width: ${width};
  height: ${height};
  animation: ${pieceRotate} linear infinite;
  animation-duration: 2s;
`;

const front = (color: string) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${color};
`;

const back = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff9;
  backface-visibility: hidden;
`;

export default function Piece({
  overrideCss,
  color,
  width,
  height,
}: PieceProps) {
  return (
    <div css={[base({ width, height }), overrideCss]}>
      <div css={back} />
      <div css={front(color)} />
    </div>
  );
}
