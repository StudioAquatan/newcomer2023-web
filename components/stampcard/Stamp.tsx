import { css, Theme, useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { OrganizationFull, RecommendationItem } from "../../api-client/@types";
import imgixLoader from "../../image-loader";
import Random from "../random";

export type StampProps = {
  recommendation: RecommendationItem;
  orgInfo: OrganizationFull;
  seed?: number;
};

const stampStyle = ({ theme }: { theme: Theme }) => {
  return css`
    position: relative;
    display: flex;
    align-items: center;
    color: ${theme.colors.stamp.normalTextColor};
    border: 3px solid ${theme.colors.stamp.backgroundColor};
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

const logoStyle = (logoFocus: boolean) => css`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: ${logoFocus ? "cover" : "contain"};
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
    width: 50%;
    height: auto;
    transform: rotate(${rotate}turn);
  `;
};

export default function Stamp({
  recommendation,
  orgInfo,
  seed = 0,
}: StampProps) {
  const random = new Random(seed);
  const secret = random.nextNumber(0, 2000);
  const theme = useTheme();

  return (
    <Link
      href={"/orgs/details/" + orgInfo.id}
      css={stampStyle({
        theme,
      })}
    >
      {recommendation.isVisited ? (
        <Image
          css={markVisitedStyle(seed)}
          src={
            secret === 224 ? "/mark_visited_aquatan.png" : "/mark_visited.png"
          }
          alt="visited"
          width={32}
          height={32}
          loader={imgixLoader}
        />
      ) : (
        ""
      )}
      <div css={orgNameStyle}>{orgInfo.shortName}</div>
      <div css={logoContainer}>
        <Image
          src={orgInfo.logo?.src ?? ""}
          alt="logo"
          css={logoStyle(orgInfo.logoFocus ?? false)}
          width={128}
          height={128}
          loader={imgixLoader}
        />
        <div css={logoFilter}></div>
      </div>
    </Link>
  );
}
