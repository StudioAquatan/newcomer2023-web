import { css } from "@emotion/react";
import Stamp from "./Stamp";

type CardProps = {
  clubNames: Array<string>;
  backgroundColors: Array<string>;
};

const container = css`
  display: grid;
  grid-template-rows: repeat(3, calc(100% / 3));
  grid-template-columns: repeat(3, calc(100% / 3));
`;

export default function Card({ clubNames, backgroundColors }: CardProps) {
  const stamps = () => {
    const stamps = [];
    for (let i = 0; i < clubNames.length; i++) {
      stamps.push(
        <Stamp clubName={clubNames[i]} backgroundColor={backgroundColors[i]} />
      );
    }
    return stamps;
  };

  return (
    <div>
      <div css={container}>{stamps()}</div>
    </div>
  );
}
