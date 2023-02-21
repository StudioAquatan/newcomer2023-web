import { css } from "@emotion/react";
import OrgDetails, {
  OrgDetailsProps,
  Organization,
} from "../../../components/orgs/OrgDetails";

const allOrgs: Array<Organization> = [
  {
    id: "0",
    fullName: "Org 1",
    shortName: "C1",
    shortDescription: "Short description",
    logo: {
      src: "/org_icons/default.png",
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
const allOrgsCache = new Map(allOrgs.map((org) => [org.id, org]));

const base = css`
  padding: 0 3.2rem;
`;

export default function OrgDetail({ org }: OrgDetailsProps) {
  return (
    <div css={base}>
      <OrgDetails org={org} />
    </div>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = params;

  if (!allOrgsCache.has(orgId)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      org: allOrgsCache.get(orgId),
    },
  };
}
