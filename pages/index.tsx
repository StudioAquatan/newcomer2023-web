import { css } from "@emotion/react";
import { ClubCardProps } from "../components/clubs/ClubCard";
import ClubShowcase, {
  ClubShowcaseProps,
} from "../components/clubs/ClubShowcase";
import { shuffle } from "../components/random";
import ClubList from "../components/toppage/ClubList";
import EntryButton from "../components/toppage/EntryButton";
import EventGuidance from "../components/toppage/EventGuidance";
import Feature from "../components/toppage/Feature";
import Hero from "../components/toppage/Hero";
import { useIsMobile } from "../store/userAgent";

const clubs: ClubCardProps[] = [
  {
    clubName: "アメリカ民謡研究会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "奇術部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ギター部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "軽音楽部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "交響楽団",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "古美術研究会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "コンピュータ部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "茶道部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "自然愛好会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "室内管弦楽団",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "写真研究部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "美術部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "漫画研究部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "テーブルトーク部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "文藝部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "アニメーション研究会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "音楽サークルRaccoon",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ダンスサークル",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "映像研究会オリヲン座",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "謎解き研究部 Xcape",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "e-sports部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "アメリカンフットボール部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "弓道部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "剣道部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "硬式テニス部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "硬式野球部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "サッカー部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "自動車部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "水泳部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ソフトテニス部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "卓球部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "バスケットボール部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "男子バレーボール部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "男子ラクロス部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "女子ラクロス部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "軟式野球部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "バドミントン部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ハンドボール部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ラグビー部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "陸上競技部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ワンダーフォーゲル部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "合気道部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "スキー部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "モーターサイクルスポーツクラブ",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "バスケットボール同好会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "バドミントンサークル",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "生協学生委員会",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "企画部",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "加子母木匠塾",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "フットサルサークルWith",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "地域創生学生団体（テクテク工房）",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ぽっけ",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "学生フォーミュラ",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "ロボコン",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
  {
    clubName: "鳥人間サークル",
    description: "ここに説明が入る",
    link: "/orgs/details/0",
  },
];

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
  showcase: ClubShowcaseProps;
};

export default function Home({ showcase }: HomeProps) {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Hero />
      <div css={container}>
        <ClubShowcase {...showcase} />
        <EntryButton isMobile={isMobile} />
        <Feature {...featureDiagnose} />
        <Feature {...featureStampRally} />
        <EventGuidance />
        <ClubList />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      showcase: {
        clubs: shuffle(clubs),
      },
    },
  };
}
