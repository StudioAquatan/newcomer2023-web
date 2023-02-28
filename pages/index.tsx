import { css } from "@emotion/react";
import { Recommendation } from "../api/@types";
import { apiClient } from "../api/apiClient";
import { OrgCardProps } from "../components/orgs/OrgCard";
import OrgShowcase, { OrgShowcaseProps } from "../components/orgs/OrgShowcase";
import Random, { shuffle } from "../components/random";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import Feature from "../components/toppage/Feature";
import FeatureStampCard from "../components/toppage/FeatureStampCard";
import Hero from "../components/toppage/Hero";
import OrgList from "../components/toppage/OrgList";
import useUser from "../hooks/user";
import { useIsMobile } from "../store/userAgent";

const diagnoseContentStyle = css`
  width: 100%;
`;

const diagnoseContentNode = (
  <img src="/toppage/diagnose.png" alt="相性診断" css={diagnoseContentStyle} />
);

const featureDiagnose = {
  link: "/orgs/details/0",
  title: "相性診断",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  featureContentNode: diagnoseContentNode,
};

const container = css`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-bottom: 5.6rem;
`;

type HomeProps = {
  showcase: OrgShowcaseProps;
  recommendation: Recommendation;
};

export default function Home({ showcase, recommendation }: HomeProps) {
  const { isMobile } = useIsMobile();
  // TODO: 相性診断するときにユーザ情報を作成すれば良いので、ここでユーザ情報を作成する必要はない
  useUser();

  const featureStampRally = {
    title: "スタンプラリー",
    description: "QRコードを読み込んで、景品を貰いに行こう！",
    inverse: true,
    recommendation: recommendation,
  };

  return (
    <>
      <Hero />
      <div css={container}>
        <OrgShowcase {...showcase} />
        <EntryButton isMobile={isMobile} />
        <Feature {...featureDiagnose} />
        <FeatureStampCard {...featureStampRally} />
        <EventGuidance />
        <OrgList />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const orgs = await apiClient.orgs
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    });

  const orgCards: OrgCardProps[] = orgs.map((org) => ({
    orgName: org.fullName,
    orgImagePath: org.logo?.src ?? "/org_icons/default.png",
    description: org.shortDescription,
    link: "/orgs/details/" + org.id,
  }));

  const random = new Random();

  // ここでランダムに9つの組織を選んでスタンプカードの例にする
  const recommendation = {
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
  };

  return {
    props: {
      showcase: {
        orgs: shuffle(orgCards),
      },
      recommendation,
    },
  };
}
