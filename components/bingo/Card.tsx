import { css } from "@emotion/react";
import Stamp from "./Stamp";
import { StampProps } from "./Stamp";

export type CardProps = {
  userId: number;
  stamps: StampProps[];
};

const container = () => {
  const gutter = "10px";
  return css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc((100vw - ${gutter} * 2) / 3);
    grid-gap: ${gutter};
    width: 100%;
  `;
};

export default function Card({ userId, stamps }: CardProps) {
  return (
    <div css={container}>
      {stamps.map((stamp, index) => {
        stamp.seed = userId + index;
        return <Stamp key={index} {...stamp} />;
      })}
    </div>
  );
}
