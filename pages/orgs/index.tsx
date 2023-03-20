import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { OrganizationFull } from "../../api-client/@types";
import { getOrgs } from "../../api-client/cached-response";
import MetaHead from "../../components/MetaHead";
import Checkbox from "../../components/buttons/Checkbox";
import Header from "../../components/headers/Header";
import OrgPanel from "../../components/orgs/list/OrgPanel";
import { useSortedOrgs } from "../../hooks/recommendation";
import imgixLoader from "../../image-loader";
import { useIsMobile } from "../../store/userAgent";
import { heroUrl } from "../../styles/images";

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
  background-image: url(${imgixLoader({ src: heroUrl, width: 1200 })});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
`;

const pageTitle = css`
  font-size: 3.5rem;
  text-shadow: 2px 2px 2px #fff, -2px 2px 2px #fff, 2px -2px 2px #fff,
    -2px -2px 2px #fff;
`;

const orgListPageStyle = css`
  width: min(90vw, 1400px);
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
  const { orgs, renderReady, available } = useSortedOrgs(organizations);
  const [sortChecked, setSortChecked] = useState(false);

  return (
    <>
      <MetaHead
        title="団体一覧"
        description="京都工芸繊維大学の部活動・サークル一覧をチェック"
      />
      <div css={heroStyle}>
        <Header isMobile={isMobile} />
        <h1 css={pageTitle}>団体一覧</h1>
      </div>

      <div css={orgListPageStyle}>
        {isMobile && (
          <Checkbox
            id="sortByRecommendation"
            label={
              renderReady ? (
                available ? (
                  "おすすめ順で表示"
                ) : (
                  <Link href="/diagnose">診断しておすすめ順表示を使う</Link>
                )
              ) : (
                "読み込み中"
              )
            }
            checked={sortChecked}
            onChange={(e) => setSortChecked(e.target.checked)}
            disabled={!available}
          />
        )}
        <div css={orgListStyle}>
          {(sortChecked ? orgs : organizations).map((org) => {
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
