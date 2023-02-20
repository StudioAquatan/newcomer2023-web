import { css, useTheme } from "@emotion/react";
import Random from "../random";

export type StampProps = {
  clubName: string;
  backgroundColor?: string;
  visited?: boolean;
  seed?: number;
};

const stampStyle = ({ backgroundColor }: { backgroundColor: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  return css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ${theme.colors.stamp.normalTextColor};
    background: ${backgroundColor};
  `;
};

const clubNameStyle = css`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  font-size: 1.6rem;
  text-align: center;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
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
  const theme = useTheme();
  return (
    <div
      css={stampStyle({
        backgroundColor: backgroundColor ?? theme.colors.stamp.backgroundColor,
      })}
    >
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
