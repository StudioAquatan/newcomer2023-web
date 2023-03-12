import { css, keyframes } from "@emotion/react";
import { OrganizationFull } from "../../../api-client/@types";
import OrgCard from "./OrgCard";

export type OrgRowProps = {
  cards: OrganizationFull[];
  inverse: boolean;
};

const base = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: hidden;

  &:hover {
    & > div {
      animation-play-state: paused;
    }
  }
`;

const rowStyle = css`
  display: flex;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const scrollInverse = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const rowAnimation = (inverse: boolean) => {
  const animation = inverse ? scrollInverse : scroll;
  return css`
    animation: ${animation} 50s linear infinite;
  `;
};

export default function OrgRow({ cards, inverse }: OrgRowProps) {
  return (
    <div css={base}>
      <div css={[rowStyle, rowAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <OrgCard key={index} {...card} />;
        })}
      </div>
      <div css={[rowStyle, rowAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <OrgCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
}
