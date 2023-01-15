import { css } from "@emotion/react";
import Stamp from "./Stamp";
import { StampProps } from "./Stamp";

export type CardProps = {
  stamps: StampProps[];
};

const container = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-gap: 1rem;
  max-width: 500px;
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
