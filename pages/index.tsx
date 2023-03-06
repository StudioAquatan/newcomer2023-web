import { css } from "@emotion/react";
import {
  OrganizationFull,
  Question,
  Recommendation,
} from "../api-client/@types";
import { getOrgs } from "../api-client/cached-response";
import { OrgCardProps } from "../components/orgs/OrgCard";
import OrgShowcase, { OrgShowcaseProps } from "../components/orgs/OrgShowcase";
import Random, { shuffle } from "../components/random";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import FeatureDiagnose from "../components/toppage/FeatureDiagnose";
import FeatureStampRally from "../components/toppage/FeatureStampRally";
import Hero from "../components/toppage/Hero";
import OrgList from "../components/toppage/OrgList";
import { OrganizationProvider } from "../hooks/organizations";
import useUser from "../hooks/user";
import { useIsMobile } from "../store/userAgent";

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
  showcase: OrgShowcaseProps;
  recommendation: Recommendation;
  orgs: OrganizationFull[];
  question: Question;
};

export default function Home({
  showcase,
  recommendation,
  orgs,
  question,
}: HomeProps) {
  const { isMobile } = useIsMobile();
  // TODO: 相性診断するときにユーザ情報を作成すれば良いので、ここでユーザ情報を作成する必要はない
  useUser();

  const featureStampRally = {
    title: "スタンプラリー",
    description: "QRコードを読み込んで、景品を貰いに行こう！",
    inverse: true,
    recommendation: recommendation,
  };

  const featureDiagnose = {
    title: "相性診断",
    description:
      "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
    inverse: false,
    question: question,
  };

  return (
    <OrganizationProvider value={orgs}>
      <Hero />
      <div css={container}>
        <OrgShowcase {...showcase} />
        <EntryButton isMobile={isMobile} />
        <FeatureDiagnose {...featureDiagnose} />
        <FeatureStampRally {...featureStampRally} />
        <EventGuidance />
        <OrgList />
      </div>
    </OrganizationProvider>
  );
}

export async function getServerSideProps() {
  const orgs = await getOrgs();

  const orgCards: OrgCardProps[] = orgs.map((org) => ({
    orgName: org.fullName,
    orgImagePath: org.logo?.src ?? "/org_icons/default.png",
    description: org.shortDescription,
    link: "/orgs/details/" + org.id,
  }));

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

  // ここでランダムに1つの質問を選んで相性診断の例にする
  const question: Question = {
    id: "example",
    questionText: shuffle(exampleQuestions)[0],
    questionType: "five",
  };

  return {
    props: {
      showcase: {
        orgs: shuffle(orgCards),
      },
      orgs,
      recommendation,
      question,
    },
  };
}

export const config = {
  runtime: "experimental-edge",
};
