import { css } from "@emotion/react";
import { OrganizationFull } from "../../api-client/@types";
import useStampCardSeed from "../../hooks/cardSeed";
import { useOrganizations } from "../../hooks/organizations";
import { useRecommendation } from "../../hooks/recommendation";
import { useIsMobile } from "../../store/userAgent";
import StampCard, { StampCardProps } from "../stampcard/Card";
import { StampProps } from "../stampcard/Stamp";
import DiagnoseLeader from "./DiagnoseLeader";

export default function ExchangeStampCard() {
  const { isMobile } = useIsMobile();
  const { data: orgsData } = useOrganizations();
  const { data: recommendationData } = useRecommendation();
  const { data: seedData } = useStampCardSeed();
  const FALLBACKSEED = 0;
  const seed = seedData?.seed ?? FALLBACKSEED;

  const fallbackOrg: OrganizationFull = {
    id: "fallback",
    fullName: "",
    shortName: "",
    shortDescription: "",
    description: "",
  };

  const stampCardContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

  // デスクトップからアクセスした時、
  // 全データが取得できるまで、
  // または、スタンプカードがない場合は表示しない
  if (
    !isMobile ||
    !recommendationData ||
    !orgsData ||
    typeof recommendationData === "symbol"
  ) {
    return <DiagnoseLeader />;
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
    // size: { maxWidth: "30rem", maxHeight: "50vw" },
  };

  return (
    <div css={stampCardContainer}>
      <StampCard {...props} />
    </div>
  );
}
