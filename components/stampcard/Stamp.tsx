import { css, useTheme } from "@emotion/react";
import { RecommendationItem } from "../../api/@types";
import Random from "../random";

export type StampProps = {
  recommendation: RecommendationItem;
  seed?: number;
};

const stampStyle = ({
  backgroundColor,
  backgroundImagePath,
}: {
  backgroundColor: string;
  backgroundImagePath: string;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  return css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ${theme.colors.stamp.normalTextColor};
    background: ${backgroundColor};
    background-image: url(${backgroundImagePath});
  `;
};

const orgNameStyle = css`
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

export default function Stamp({ recommendation, seed = 0 }: StampProps) {
  const theme = useTheme();
  return (
    <div
      css={stampStyle({
        backgroundColor: theme.colors.stamp.backgroundColor,
        backgroundImagePath: "/org_icons/default.png",
      })}
    >
      {recommendation.isVisited ? (
        <img
          css={markVisitedStyle(seed)}
          src="/mark_visited.png"
          alt="visited"
        />
      ) : (
        ""
      )}
      {/* TODO: 団体名をキャッシュからIDを使って取得する */}
      <div css={orgNameStyle}>{recommendation.org.id}</div>
    </div>
  );
}
