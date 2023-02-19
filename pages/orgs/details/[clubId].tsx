import { css } from "@emotion/react";
import ClubDetails, {
  ClubDetailsProps,
  Organization,
} from "../../../components/clubs/ClubDetails";

const allClubs: Array<Organization> = [
  {
    id: "0",
    fullName: "Club 1",
    shortName: "C1",
    shortDescription: "Short description",
    logo: {
      src: "/club_icons/default.png",
      width: 150,
      height: 150,
    },
    description: "Long description",
    location: "講義室",
    fees: "月1000円",
    activeDays: "毎週 火曜日 18:00~、木曜日 18:00~",
    links: ["https://twitter.com/", "https://example.com"],
  },
];

// TODO: キャッシュで持たせて、アプリ全体で共有したい
const allClubsCache = new Map(allClubs.map((club) => [club.id, club]));

const base = css`
  padding: 0 3.2rem;
`;

export default function ClubDetail({ club }: ClubDetailsProps) {
  return (
    <div css={base}>
      <ClubDetails club={club} />
    </div>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { clubId: string };
}) {
  const { clubId } = params;

  if (!allClubsCache.has(clubId)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      club: allClubsCache.get(clubId),
    },
  };
}
