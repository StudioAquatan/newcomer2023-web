import { css } from "@emotion/react";
import { getOrgs } from "../../../api-client/cached-response";
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

// 各団体詳細ページの初期データを生成しておく
export async function getStaticPaths() {
  // getStaticPaths時、MSWを使ったモックが有効になる前にAPIにアクセスしてしまう
  const orgs = await getOrgs();

  const paths = orgs.map((org, index) => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      // モック時の団体IDは0から始まる数字なので、代わりにそれを利用する
      return `/orgs/details/${index}`;
    }
    return `/orgs/details/${org.id}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = params;

  // 全団体詳細ページの初期データを取得
  // 全団体のデータを返すAPIしかないので、団体数回、全団体のデータを取得するAPIリクエストが発生してしまう
  const orgs = await getOrgs();

  const orgMap = new Map(orgs.map((org) => [org.id, org]));
  const org = orgMap.get(orgId);

  if (org === undefined) {
    throw Error("団体が見つかりませんでした ID: " + orgId);
  }

  return {
    props: {
      org: org,
    },
  };
}
