import { css } from "@emotion/react";
import { apiClient } from "../api/apiClient";
import { OrgCardProps } from "../components/orgs/OrgCard";
import OrgShowcase, { OrgShowcaseProps } from "../components/orgs/OrgShowcase";
import { shuffle } from "../components/random";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import Feature from "../components/toppage/Feature";
import Hero from "../components/toppage/Hero";
import OrgList from "../components/toppage/OrgList";
import useUser from "../hooks/user";
import { useIsMobile } from "../store/userAgent";

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
  // TODO: 相性診断するときにユーザ情報を作成すれば良いので、ここでユーザ情報を作成する必要はない
  useUser();

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

  return {
    props: {
      showcase: {
        orgs: shuffle(orgCards),
      },
    },
  };
}
