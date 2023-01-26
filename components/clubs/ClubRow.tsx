import { css, keyframes } from "@emotion/react";
import ClubCard from "./ClubCard";
import { ClubCardProps } from "./ClubCard";

export type ClubRowProps = {
  cards: ClubCardProps[];
  inverse: boolean;
};

const base = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: hidden;
`;

const rowStyle = css`
  display: flex;
  column-gap: 1.6rem;
  padding-right: 1.6rem;
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

export default function ClubRow({ cards, inverse }: ClubRowProps) {
  return (
    <div css={base}>
      <div css={[rowStyle, rowAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
      <div css={[rowStyle, rowAnimation(inverse)]}>
        {cards.map((card, index) => {
          return <ClubCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
}
