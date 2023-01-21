import { css, keyframes } from "@emotion/react";
import ClubCard from "./ClubCard";
import { ClubCardProps } from "./ClubCard";

export type ClubShowcaseProps = {
  cards: ClubCardProps[];
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

const showcaseAnimation = css`
  animation: ${scroll} 20s linear infinite;
`;

export default function ClubShowcase({ cards }: ClubShowcaseProps) {
  return (
    <div css={base}>
      <div css={[showcaseStyle, showcaseAnimation]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
      <div css={[showcaseStyle, showcaseAnimation]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
}
