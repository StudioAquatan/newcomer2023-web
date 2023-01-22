import { css, keyframes } from "@emotion/react";
import ClubCard from "./ClubCard";
import { ClubCardProps } from "./ClubCard";

export type ClubShowcaseProps = {
  cards: ClubCardProps[];
  inverse: boolean;
};

const base = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow-x: hidden;
`;

const showcaseStyle = css`
  display: flex;
  column-gap: 1em;
  padding-right: 1em;
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

const showcaseAnimation = (inverse: boolean) => {
  const animation = inverse ? scrollInverse : scroll;
  return css`
    animation: ${animation} 20s linear infinite;
  `;
};

export default function ClubShowcase({ cards, inverse }: ClubShowcaseProps) {
  return (
    <div css={base}>
      <div css={[showcaseStyle, showcaseAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
      <div css={[showcaseStyle, showcaseAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
}
