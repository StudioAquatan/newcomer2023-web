import { css } from "@emotion/react";
import ClubRow, { ClubRowProps } from "./ClubRow";

export type ClubShowcaseProps = {
  rows: ClubRowProps[];
};

const base = css`
  position: absolute;
  display: grid;
  gap: 1rem;
`;

export default function ClubShowcase({ rows }: ClubShowcaseProps) {
  return (
    <div css={base}>
      {rows.map((row, index) => {
        return <ClubRow key={index} {...row} />;
      })}
    </div>
  );
}
