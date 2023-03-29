import { css, keyframes } from "@emotion/react";
import React from "react";
import Random from "../random";
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

const piece = ({
  margin,
  delay,
  duration,
}: {
  margin: string;
  delay: string;
  duration: string;
}) => css`
  position: absolute;
  height: 100%;
  margin-left: ${margin};
  animation: ${fall} linear infinite;
  animation-duration: ${duration};
  animation-delay: ${delay};
`;

type ConfettiProps = {
  count: number;
  duration: {
    min: number;
    max: number;
  };
  delay: number;
};

export default function Confetti({ count, duration, delay }: ConfettiProps) {
  const pieces = React.useMemo(() => {
    const SEED = 0;
    const r = new Random(SEED);
    return (
      <>
        {[...Array(count)].map((_, i) => {
          return (
            <div
              key={i}
              css={piece({
                margin: `${r.nextNumber(0, 100)}%`,
                duration: `${r.nextNumber(duration.min, duration.max) * 0.1}s`,
                delay: `-${r.nextNumber(0, delay) * 0.1}s`,
              })}
            >
              <Piece color="#ff0000" width="10px" height="10px" />
            </div>
          );
        })}
      </>
    );
  }, [count, delay, duration]);

  return <div css={base}>{pieces}</div>;
}
