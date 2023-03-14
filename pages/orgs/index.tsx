import { css } from "@emotion/react";
import { OrganizationFull } from "../../api-client/@types";
import { getOrgs } from "../../api-client/cached-response";
import Header from "../../components/headers/Header";
import OrgPanel from "../../components/orgs/list/OrgPanel";
import { useIsMobile } from "../../store/userAgent";

type OrgListPageProps = {
  organizations: OrganizationFull[];
};

const heroStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background-color: rgb(0 0 0 / 10%);
  background-image: url("/toppage/hero.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
`;

const pageTitle = css`
  font-size: 3.5rem;
`;

const orgListPageStyle = css`
  width: 100%;
  max-width: 1400px;
  padding-top: 3rem;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding-top: 1rem;
  }
`;

const orgListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 20px;
  justify-content: center;
  margin: 20px auto;
`;

export default function OrgListPage({ organizations }: OrgListPageProps) {
  const { isMobile } = useIsMobile();
  return (
    <>
      <div css={heroStyle}>
        <Header isMobile={isMobile} />
        <h1 css={pageTitle}>団体一覧</h1>
      </div>
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
