import { css } from "@emotion/react";
import Random from "../random";

export type StampProps = {
  clubName: string;
  backgroundColor: string;
  visited?: boolean;
  seed?: number;
};

const stampStyle = (backgroundColor: string) => css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  display: -moz-box;
  display: -webkit-box;
  display: -o-box;
  display: -ms-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  -o-box-orient: vertical;
  -ms-box-orient: vertical;
  -webkit-line-clamp: 3;
  width: 100%;
  overflow: hidden;
  text-align: center;
  word-break: break-all;
`;

const markVisitedStyle = (seed: number) => {
  const random = new Random(seed);
  const minRotate = -0.15;
  const maxRotate = 0.15;
  const rotate = random.nextNumber(0, 1) * (maxRotate - minRotate) + minRotate;
  const maxMove = "5%";

  return css`
    position: absolute;
    right: calc(${maxMove} * ${random.nextNumber(0, 1)});
    bottom: calc(${maxMove} * ${random.nextNumber(0, 1)});
    width: 30%;
    transform: rotate(${rotate}turn);
  `;
};

export default function Stamp({
  clubName,
  backgroundColor,
  visited = false,
  seed = 0,
}: StampProps) {
  return (
    <div css={[stampStyle(backgroundColor)]}>
      {visited ? (
        <img
          css={markVisitedStyle(seed)}
          src="/mark_visited.png"
          alt="visited"
        />
      ) : (
        ""
      )}
      <div css={clubNameStyle}>{clubName}</div>
    </div>
  );
}
