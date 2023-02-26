import { apiClient } from "../../../api/apiClient";
import OrgDetailsText, {
  OrgDetailsProps,
} from "../../../components/orgs/details/OrgDetailsText";
import StoryLikeContainer from "../../../components/orgs/details/StoryLikeContainer";

export default function OrgDetail({ org }: OrgDetailsProps) {
  return (
    <StoryLikeContainer numPages={5} currentPage={1} pageProgress={0.5}>
      <OrgDetailsText org={org} type="summary" />
    </StoryLikeContainer>
  );
}

// 各団体詳細ページの初期データを生成しておく
export async function getStaticPaths() {
  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw Error(error);
    });

  const paths = orgs.map((org) => `/orgs/details/${org.id}`);

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
  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw Error(error);
    });

  const orgMap = new Map(orgs.map((org) => [org.id, org]));
  const org = orgMap.get(orgId);

  if (org === undefined) {
    throw Error("団体が見つかりませんでした");
  }

  return {
    props: {
      org: org,
    },
  };
}
