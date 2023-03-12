import { css } from "@emotion/react";
import { OrganizationFull } from "../../api-client/@types";
import { getOrgs } from "../../api-client/cached-response";
import Header from "../../components/headers/Header";
import OrgPanel from "../../components/orgs/list/OrgPanel";
import { useIsMobile } from "../../store/userAgent";

type OrgListPageProps = {
  organizations: OrganizationFull[];
};

const orgListPageStyle = css`
  width: 100%;
  max-width: 1400px;
  padding-top: 5rem;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding-top: 8rem;
  }
`;

const orgListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 30px 20px;
  justify-content: center;
  margin: 20px auto;
`;

export default function OrgListPage({ organizations }: OrgListPageProps) {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Header isMobile={isMobile} />
      <div css={orgListPageStyle}>
        <div css={orgListStyle}>
          {organizations.map((org) => {
            return <OrgPanel org={org} key={org.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // 全団体詳細ページの初期データを取得
  // 全団体のデータを返すAPIしかないので、団体数回、全団体のデータを取得するAPIリクエストが発生してしまう
  const orgs = await getOrgs();

  return {
    props: {
      organizations: orgs,
    },
  };
}
