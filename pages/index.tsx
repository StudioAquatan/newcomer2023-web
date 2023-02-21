import { css } from "@emotion/react";
import OrgShowcase, { OrgShowcaseProps } from "../components/orgs/OrgShowcase";
import { shuffle } from "../components/random";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import Feature from "../components/toppage/Feature";
import Hero from "../components/toppage/Hero";
import OrgList from "../components/toppage/OrgList";
import { useIsMobile } from "../store/userAgent";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010";

const featureDiagnose = {
  link: "/orgs/details/0",
  title: "相性診断",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  featureImagePath: "/toppage/diagnose.png",
};

const featureStampRally = {
  title: "スタンプラリー",
  description: "QRコードを読み込んで、景品を貰いに行こう！",
  featureImagePath: "/toppage/stamp-rally.png",
  inverse: true,
};

const container = css`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-bottom: 5.6rem;
`;

type HomeProps = {
  showcase: OrgShowcaseProps;
};

export default function Home({ showcase }: HomeProps) {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Hero />
      <div css={container}>
        <OrgShowcase {...showcase} />
        <EntryButton isMobile={isMobile} />
        <Feature {...featureDiagnose} />
        <Feature {...featureStampRally} />
        <EventGuidance />
        <OrgList />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(API_URL + "/orgs");
  const data = await response.json();

  const orgs = data.map((org: any) => ({
    orgName: org.fullName,
    description: org.shortDescription,
    link: "/orgs/details/0",
  }));

  return {
    props: {
      showcase: {
        orgs: shuffle(orgs),
      },
    },
  };
}
