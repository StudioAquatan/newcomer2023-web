import { css } from "@emotion/react";
import Stamp from "./Stamp";
import { StampProps } from "./Stamp";

export type CardProps = {
  stamps: StampProps[];
};

const container = css`
  display: grid;
  grid-template-rows: repeat(3, calc(100% / 3));
  grid-template-columns: repeat(3, calc(100% / 3));
`;

export default function Card({ stamps }: CardProps) {
  return (
    <div css={container}>
      {stamps.map((stamp, index) => {
        return <Stamp key={index} {...stamp} />;
      })}
    </div>
  );
}
