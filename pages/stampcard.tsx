import { css } from "@emotion/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuestionResult, Recommendation } from "../api/@types";
import { apiClient } from "../api/apiClient";
import GlowingPinkButton from "../components/buttons/GlowingPinkButton";
import { StampProps } from "../components/stampcard/Stamp";
import StampCard, { StampCardProps } from "../components/stampcard/StampCard";
import useStampCardSeed from "../hooks/cardSeed";

type StampCardPageProps = {
  recommendation: Recommendation;
  questions?: QuestionResult;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const stampCardHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3.2rem;
`;

const stampCardTitle = css`
  padding: 0;
  margin: 1rem 0;
  font-size: 4rem;
`;

const stampCardDescription = css`
  padding: 0;
  margin: 0;
  font-size: 2.8rem;
  text-align: center;
`;

const stampCardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const stampCardBottom = css`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 3.2rem;
`;

const otherOrgs = css`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export default function StampCardPage({ recommendation }: StampCardPageProps) {
  const { data: seedData } = useStampCardSeed();
  const FALLBACKSEED = 0;
  const seed = seedData?.seed ?? FALLBACKSEED;

  // TODO: 表示位置がつけられたもののみ使う
  const stamps: StampProps[] = recommendation.orgs.map(
    (recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        seed: seed + index,
      };
    }
  );

  const props: StampCardProps = {
    stamps: stamps,
  };

  return (
    <div css={container}>
      <div css={stampCardHeader}>
        <p css={stampCardTitle}>スタンプラリー</p>
        <p css={stampCardDescription}>ブースを回ってスタンプを集めよう！</p>
      </div>
      <div css={stampCardContainer}>
        <StampCard {...props} />
      </div>
      <div css={stampCardBottom}>
        <GlowingPinkButton text="シェアしてみよう!" href="/" />
        <p css={otherOrgs}>
          他の部活を見る
          <br />
          <FontAwesomeIcon icon={faChevronDown} />
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recommendations = await apiClient.recommendation
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return {
    props: recommendations,
  };
}
