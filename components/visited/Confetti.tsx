import { css, Keyframes, keyframes } from "@emotion/react";
import React from "react";
import Random from "../random";
import Piece from "./Piece";

const colorPalette = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

const base = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const fallA = keyframes`
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

const fallB = keyframes`
  0% {
    transform: translate(75%, 0);
  }
  25% {
    transform: translate(0, 25%);
  }
  50% {
    transform: translate(-125%, 50%);
  }
  75% {
    transform: translate(25%, 75%);
  }
  100% {
    transform: translate(75%, 100%);
  }
`;

const fallC = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  25% {
    transform: translate(-25%, 25%);
  }
  50% {
    transform: translate(50%, 50%);
  }
  75% {
    transform: translate(-75%, 75%);
  }
  100% {
    transform: translate(100%, 100%);
  }
`;

const pieceContainer = ({
  margin,
  delay,
  duration,
  keyframe,
}: {
  margin: string;
  delay: string;
  duration: string;
  keyframe: Keyframes;
}) => css`
  position: absolute;
  height: 100%;
  margin-left: ${margin};
  animation: ${keyframe} linear infinite;
  animation-duration: ${duration};
  animation-delay: ${delay};
`;

export type ConfettiProps = {
  count: number;
  fall: {
    duration: {
      min: number;
      max: number;
    };
    delay: {
      min: number;
      max: number;
    };
  };
  piece: {
    duration: {
      min: number;
      max: number;
    };
  };
};

export default function Confetti({ count, fall, piece }: ConfettiProps) {
  const pieces = React.useMemo(() => {
    const SEED = 0;
    const r = new Random(SEED);
    const keyframes = [fallA, fallB, fallC];

    return (
      <>
        {[...Array(count)].map((_, i) => {
          const selectedKeyframe =
            keyframes[r.nextNumber(0, keyframes.length - 1)];

          const overrideCss = (duration: number) => css`
            animation-duration: ${duration}s;
          `;

          return (
            <div
              key={i}
              css={[
                pieceContainer({
                  margin: `${r.nextNumber(0, 100)}%`,
                  duration: `${
                    r.nextNumber(fall.duration.min, fall.duration.max) * 0.1
                  }s`,
                  delay: `-${
                    r.nextNumber(fall.delay.min, fall.delay.max) * 0.1
                  }s`,
                  keyframe: selectedKeyframe,
                }),
              ]}
            >
              <Piece
                overrideCss={overrideCss(
                  r.nextNumber(piece.duration.min, piece.duration.max) * 0.1
                )}
                color={colorPalette[r.nextNumber(0, colorPalette.length - 1)]}
                width="10px"
                height="10px"
              />
            </div>
          );
        })}
      </>
    );
  }, [count, fall, piece]);

  return <div css={base}>{pieces}</div>;
}
