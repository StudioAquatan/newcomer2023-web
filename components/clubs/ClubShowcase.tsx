import { css } from "@emotion/react";
import { ClubCardProps } from "./ClubCard";
import ClubRow from "./ClubRow";

export type ClubShowcaseProps = {
  clubs: ClubCardProps[];
};

const base = css`
  display: grid;
  gap: 1rem;
`;

export default function ClubShowcase({ clubs }: ClubShowcaseProps) {
  const maxClubCount = 30 > clubs.length ? clubs.length : 30;
  const slicedClubs = clubs.slice(0, maxClubCount);
  const clubsPerRow = Math.ceil(slicedClubs.length / 3);
  const rows = [
    { cards: slicedClubs.slice(0, clubsPerRow), inverse: false },
    { cards: slicedClubs.slice(clubsPerRow, clubsPerRow * 2), inverse: true },
    {
      cards: slicedClubs.slice(clubsPerRow * 2, clubsPerRow * 3),
      inverse: false,
    },
  ];
  return (
    <div css={base}>
      {rows.map((row, index) => {
        return <ClubRow key={index} {...row} />;
      })}
    </div>
  );
}
