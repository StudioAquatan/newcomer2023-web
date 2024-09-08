import { css } from "@emotion/react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useMemo } from "react";
import {
  OrganizationFull,
  Question,
  Recommendation,
} from "../api-client/@types";
import { getOrgs } from "../api-client/cached-response";
import MetaHead from "../components/MetaHead";
import OrgShowcase from "../components/orgs/showcase/OrgShowcase";
import Random, { shuffle } from "../components/random";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import FeatureDiagnose from "../components/toppage/FeatureDiagnose";
import FeatureStampRally from "../components/toppage/FeatureStampRally";
import Hero from "../components/toppage/Hero";
import OrgList from "../components/toppage/OrgList";
import { OrganizationProvider, useOrganizations } from "../hooks/organizations";

const OGP_URL = process.env.NEXT_PUBLIC_OGP_URL ?? "http://localhost:8787";

const exampleQuestions: Array<string> = [
  "運動系の団体に興味がある",
  "球技を行う団体に興味がある",
  "ネット型競技を行う団体に興味がある",
  "音楽系の団体に興味がある",
  "ゲームをする団体に興味がある（アナログ、デジタルに拘らない）",
  "厳しいか緩いかで言ったら緩い団体に興味がある",
  "集団競技を行う団体に興味がある",
  "週２回以上活動をしている団体に興味がある",
  "頭より体を動かす団体に興味がある",
  "「とりあえず何かに所属したい」と思っている新入生も歓迎する団体に興味がある",
  "自分を表現する場所がある団体に興味がある",
  "自然と触れ合える団体に興味がある",
  "文化と触れ合える団体に興味がある",
  "ウィンタースポーツを行う団体に興味がある",
  "創作活動（絵を描く、作曲する、文章を書く）がある団体に興味がある",
  "マネージャーなどを募集している団体に興味がある",
  "人前に立つことが多い団体に興味がある",
  "演技をする団体に興味がある",
  "乗り物を操作する団体に興味がある",
  "実際に物を作る（いわゆるものづくり）を行う団体に興味がある",
  "「起業したい」と思っている新入生に入部して欲しい団体に興味がある",
  "社会貢献ができる団体に興味がある",
  "全員がアクティブに活動している団体に興味がある",
  "長期休暇中も活動する団体に興味がある",
];

const container = css`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-bottom: 5.6rem;
`;

type HomeProps = {
  uid: string | null;
  showcaseIds: string[];
  showcaseRecommendation: Recommendation;
  orgs: OrganizationFull[];
  questions: Question[];
};

function OrgsCache() {
  useOrganizations();

  return null;
}
export default function Home({
  uid,
  showcaseIds,
  showcaseRecommendation,
  orgs,
  questions,
}: HomeProps) {
  const { replace, query } = useRouter();
  // TODO: 相性診断するときにユーザ情報を作成すれば良いので、ここでユーザ情報を作成する必要はない
  // useUser();

  const featureStampRally = {
    title: "スタンプラリー",
    description: (
      <>
        各団体の説明を聞いて
        <wbr />
        QRコードを読み込み、
        <wbr />
        景品をもらいに行こう！
        <wbr />
        景品は新歓委員会の本部で
        <wbr />
        交換できるよ！
      </>
    ),
    inverse: true,
    recommendation: showcaseRecommendation,
    orgs: orgs,
  };

  const featureDiagnose = {
    title: "相性診断",
    description: (
      <>
        スタンプラリーのために
        <wbr />
        相性診断をして自分に
        <wbr />
        合った部・サークルの
        <wbr />
        説明を聞きに行こう！
      </>
    ),
    inverse: false,
    questions: questions,
  };

  const showcaseOrgs = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return showcaseIds.map((orgId) => orgs.find(({ id }) => orgId === id)!);
  }, [orgs, showcaseIds]);

  React.useEffect(() => {
    // uidのクエリパラメータ付きはOGP用URLなので、ホームにリダイレクトする
    if (query["uid"]) {
      // pushだとquery parameter付きURLが履歴に残るので、replaceを使う
      replace(
        "/",
        undefined,
        { shallow: true } // URLだけ変更してページ内容は更新しない
      );
    }
  }, [query, replace]);

  return (
    <OrganizationProvider value={orgs}>
      <MetaHead
        description="相性診断をして自分に合った部・サークルの説明を聞きに行こう！スタンプラリーも！"
        largeImage={uid ? `${OGP_URL}?uid=${uid}` : undefined}
      />
      <Hero />
      <div css={container}>
        <OrgShowcase orgs={showcaseOrgs} />
        <EntryButton />

        <FeatureDiagnose {...featureDiagnose} />
        <FeatureStampRally {...featureStampRally} />
        <EventGuidance />
        <OrgList />
      </div>
      <OrgsCache />
    </OrganizationProvider>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const uid = query.uid as string; // OGP画像用のユーザID
  const orgs = await getOrgs();

  const random = new Random();

  // ここでランダムに9つの組織を選んでスタンプカードの例にする
  const recommendation: Recommendation = {
    orgs: shuffle(orgs)
      .splice(0, 9)
      .map((org, index) => ({
        org: {
          id: org.id,
        },
        coefficient: 0,
        isVisited: random.nextNumber(0, 1) > 0.5,
        isExcluded: false,
        stampSlot: index,
      })),
    ignoreRemains: 0,
    renewRemains: 0,
  };

  // ここでランダムに2つの質問を選んで相性診断の例にする
  const questions: Question[] = shuffle(exampleQuestions)
    .slice(0, 2)
    .map((question, index) => ({
      id: "example" + index,
      questionText: question,
      questionType: "five",
    }));

  return {
    props: {
      uid: uid ?? null,
      showcaseIds: shuffle(orgs.map(({ id }) => id)).slice(0, 30),
      orgs,
      showcaseRecommendation: recommendation,
      questions,
    },
  };
}

export const config = {
  runtime: "experimental-edge",
};
