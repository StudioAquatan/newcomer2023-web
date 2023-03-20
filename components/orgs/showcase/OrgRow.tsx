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
  flex-shrink: 0;
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
    transform: translate(0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const scrollInverse = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0);
  }
`;

const rowAnimation = (inverse: boolean) => {
  const animation = inverse ? scrollInverse : scroll;
  return css`
    transform: translateX(${inverse ? "-100%" : "0"});
    animation: ${animation} 50s linear infinite;
  `;
};

export default function OrgRow({ cards, inverse }: OrgRowProps) {
  const animation = rowAnimation(inverse);
  const onLoad = () => {
    document.querySelectorAll(`.${rowStyle}`)
      .forEach(row => row.classList.add(`${animation}`))
  };

  return (
    <div css={base} onLoad={onLoad}>
      <div css={rowStyle}>
        {cards.map((card, index) => {
          return <OrgCard key={index} {...card} />;
        })}
      </div>
      <div css={rowStyle}>
        {cards.map((card, index) => {
          return <OrgCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
}
