import { css } from "@emotion/react";
import { apiClient } from "../../../api/apiClient";
import OrgDetails, {
  OrgDetailsProps,
} from "../../../components/orgs/OrgDetails";

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

  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  if (orgs.length === 0) {
    return {
      notFound: true,
    };
  }

  const orgMap = new Map(orgs.map((org) => [org.id, org]));

  return {
    props: {
      org: orgMap.get(orgId),
    },
  };
}
