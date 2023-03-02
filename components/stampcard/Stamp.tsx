import { css, Theme, useTheme } from "@emotion/react";
import { RecommendationItem } from "../../api/@types";
import { useOrganizations } from "../../hooks/organizations";
import Random from "../random";

export type StampProps = {
  recommendation: RecommendationItem;
  seed?: number;
};

const stampStyle = ({ theme }: { theme: Theme }) => {
  return css`
    position: relative;
    display: flex;
    align-items: center;
    color: ${theme.colors.stamp.normalTextColor};
    background: ${theme.colors.stamp.backgroundColor};
  `;
};

const orgNameStyle = css`
  z-index: 2;
  display: -webkit-box;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  font-size: 1.6rem;
  text-align: center;
  text-shadow: 2px 2px 2px #000, -2px 2px 2px #000, 2px -2px 2px #000,
    -2px -2px 2px #000;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const logoContainer = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const logoFilter = css`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 20%); /* 背景色 */
`;

const logoStyle = css`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
    z-index: 2;
    width: 30%;
    transform: rotate(${rotate}turn);
  `;
};

export default function Stamp({ recommendation, seed = 0 }: StampProps) {
  const theme = useTheme();
  const { data: organizations } = useOrganizations();

  if (organizations === undefined) {
    return <div>loading...</div>;
  }

  const { organizationsMap } = organizations;
  const org = organizationsMap.get(recommendation.org.id);

  return (
    <div
      css={stampStyle({
        theme,
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
      <div css={orgNameStyle}>{org?.shortName ?? ""}</div>
      <div css={logoContainer}>
        <img src={org?.logo?.src ?? ""} alt="logo" css={logoStyle} />
        <div css={logoFilter}></div>
      </div>
    </div>
  );
}
