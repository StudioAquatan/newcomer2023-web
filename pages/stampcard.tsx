import { css } from "@emotion/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrganizationFull } from "../api-client/@types";
import GlowingPinkButton from "../components/buttons/GlowingPinkButton";
import { StampProps } from "../components/stampcard/Stamp";
import StampCard, { StampCardProps } from "../components/stampcard/StampCard";
import useStampCardSeed from "../hooks/cardSeed";
import { useOrganizations } from "../hooks/organizations";
import { useRecommendation } from "../hooks/recommendation";
import useUser from "../hooks/user";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100svh;
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

const fallbackOrg: OrganizationFull = {
  id: "fallback",
  fullName: "",
  shortName: "",
  shortDescription: "",
  description: "",
};

export default function StampCardPage() {
  const { data: userData } = useUser();
  const { data: orgsData } = useOrganizations();
  const { data: recommendationData } = useRecommendation(userData?.token);
  const { data: seedData } = useStampCardSeed();
  const FALLBACKSEED = 0;
  const seed = seedData?.seed ?? FALLBACKSEED;

  if (!recommendationData || !orgsData) {
    return <div>loading...</div>;
  }

  const recommendation = recommendationData.recommendation;

  // TODO: 表示位置がつけられたもののみ使う
  const stamps: StampProps[] = recommendation.orgs.map(
    (recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        orgInfo:
          orgsData.organizationsMap.get(recommendationItem.org.id) ??
          fallbackOrg,
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
