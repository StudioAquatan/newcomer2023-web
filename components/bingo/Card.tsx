import { css } from "@emotion/react";
import Stamp from "./Stamp";

type CardProps = {
  clubNames: Array<string>;
  backgroundColors: Array<string>;
};

const cardStyle = css`
  display: grid;
  grid-template-rows: 150px 150px 150px;
  grid-template-columns: 150px 150px 150px;
  align-content: center;
  justify-content: center;
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
      <div css={cardStyle}>{stamps()}</div>
    </div>
  );
}
