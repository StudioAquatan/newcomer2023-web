import { css } from "@emotion/react";
import { RecommendationItem, Visit } from "../../api-client/@types";
import { useRecommendation } from "../../hooks/recommendation";
import { useGetVisits } from "../../hooks/visits";
import { useIsMobile } from "../../store/userAgent";
import { ExchangeDescription } from "./Exchange";

const countStamp = (recommedations: RecommendationItem[], visits: Visit[]) => {
  const orgsOnStampcard = recommedations.slice(0, 9);

  const count = orgsOnStampcard.reduce((acc, org) => {
    const isVisited = visits.some((visit) => visit.orgId === org.org.id);
    return acc + (isVisited ? 1 : 0);
  }, 0);

  return count;
};

function StampCountContent({ count }: { count: number }) {
  const stampCountStyle = css`
    font-size: 2.8rem;
    font-weight: bold;
  `;

  return (
    <ExchangeDescription>
      <p>あなたは現在スタンプを</p>
      <p css={stampCountStyle}>{count}個</p>
      <p>獲得しています</p>
    </ExchangeDescription>
  );
}

export default function StampCount() {
  const { isMobile } = useIsMobile();
  const { data: recommendationData } = useRecommendation();
  const { data: visitsData } = useGetVisits();

  // 全データが取得できるまで
  // または、スタンプカードがない場合は表示しない
  if (
    !isMobile ||
    !recommendationData ||
    typeof recommendationData === "symbol" ||
    !visitsData
  ) {
    return <></>;
  }

  const count = countStamp(
    recommendationData.recommendation.orgs,
    visitsData ?? []
  );

  return <StampCountContent count={count} />;
}
