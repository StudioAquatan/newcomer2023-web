import { css, useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrganizationFull } from "../api-client/@types";
import MetaHead from "../components/MetaHead";
import ColorBorderButton from "../components/buttons/ColorBorderButton";
import Header from "../components/headers/Header";
import { StampProps } from "../components/stampcard/Stamp";
import StampCard, { StampCardProps } from "../components/stampcard/StampCard";
import useStampCardSeed from "../hooks/cardSeed";
import { useOrganizations } from "../hooks/organizations";
import { NoRecommendation, useRecommendation } from "../hooks/recommendation";
import useUser from "../hooks/user";
import { useIsMobile } from "../store/userAgent";

const headerPadding = css`
  height: 2rem;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
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

// const otherOrgs = css`
//   padding: 0;
//   margin: 0;
//   font-size: 2rem;
//   text-align: center;
// `;

const fallbackOrg: OrganizationFull = {
  id: "fallback",
  fullName: "",
  shortName: "",
  shortDescription: "",
  description: "",
};

export default function StampCardPage() {
  const theme = useTheme();
  const { isMobile } = useIsMobile();
  const { data: userData } = useUser();
  const { data: orgsData } = useOrganizations();
  const { data: recommendationData } = useRecommendation(userData?.token);
  const { data: seedData } = useStampCardSeed();
  const FALLBACKSEED = 0;
  const seed = seedData?.seed ?? FALLBACKSEED;
  const { push } = useRouter();

  React.useEffect(() => {
    if (recommendationData === NoRecommendation) {
      push("/");
    }
  }, [recommendationData, push]);

  if (!recommendationData || !orgsData) {
    return <div>loading...</div>;
  }

  if (typeof recommendationData === "symbol") {
    return null;
  }

  const recommendation = recommendationData.recommendation;

  // TODO: 表示位置がつけられたもののみ使う
  const stamps: StampProps[] = recommendation.orgs
    .slice(0, 9)
    .map((recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        orgInfo:
          orgsData.organizationsMap.get(recommendationItem.org.id) ??
          fallbackOrg,
        seed: seed + index,
      };
    });

  const props: StampCardProps = {
    stamps: stamps,
  };

  return (
    <div css={container}>
      <MetaHead
        title="あなたのスタンプカード"
        description="スタンプカードをもって部活動紹介を回ろう"
      />
      <div css={headerPadding}>
        <Header isMobile={isMobile} />
      </div>
      <div css={content}>
        <div css={stampCardHeader}>
          <p css={stampCardTitle}>スタンプラリー</p>
          <p css={stampCardDescription}>ブースを回ってスタンプを集めよう！</p>
        </div>
        <div css={stampCardContainer}>
          <StampCard {...props} />
        </div>
        <div css={stampCardBottom}>
          {/* <GlowingPinkButton text="シェアしてみよう!" href="/" /> */}
          <ColorBorderButton
            label="シェアしてみよう！"
            textColor={theme.colors.button.enable.backgroundColor}
            borderColor={theme.colors.button.enable.backgroundColor}
            fontSize="2.4rem"
          />
          {/* <p css={otherOrgs}>
          他の部活を見る
          <br />
          <FontAwesomeIcon icon={faChevronDown} />
        </p> */}
        </div>
      </div>
    </div>
  );
}
