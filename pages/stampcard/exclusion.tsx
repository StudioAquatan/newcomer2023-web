import { css } from "@emotion/react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MetaHead from "../../components/MetaHead";
import JumpingLogoLoader from "../../components/loaders/JumpingLogoLoader";
import ExclusionPanel from "../../components/stampcard/ExclusionPanel";
import { useOrganizations } from "../../hooks/organizations";
import {
  isRecommendationReady,
  NoRecommendation,
  useRecommendation,
} from "../../hooks/recommendation";

const headerContainer = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  p {
    margin: 0;
  }
`;

const listContainer = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const iconMargin = css`
  margin-left: 1rem;
`;

const linkStyle = css`
  padding: 3rem 0;
  font-size: 2rem;
  color: rgba(0 0 0 / 95%);
`;

export default function ExclusionPage() {
  const { data: recommendation, isLoading } = useRecommendation();
  const { push } = useRouter();
  const orgMap = useOrganizations().data?.organizationsMap;

  React.useEffect(() => {
    if (recommendation === NoRecommendation) {
      push("/");
    }
  }, [push, recommendation]);

  if (isLoading || !orgMap) {
    return (
      <>
        <MetaHead title="除外団体の設定" description="除外団体を設定します" />
        <JumpingLogoLoader label="読み込み中..." pageMode />
      </>
    );
  }

  if (!isRecommendationReady(recommendation)) {
    return null;
  }

  const excludedOrgs = recommendation.recommendation.orgs.filter(
    ({ isExcluded, stampSlot }) => isExcluded || stampSlot >= 0
  );

  return (
    <>
      <MetaHead title="除外団体の設定" description="除外団体を設定します" />
      <div css={headerContainer}>
        <h1>除外団体の設定</h1>
        <p>ここで指定した団体はスタンプカードに表示されなくなります</p>
        <p>(最大5団体)</p>
      </div>
      <div css={listContainer}>
        {excludedOrgs.map((item) => {
          return (
            <ExclusionPanel
              key={item.org.id}
              item={item}
              excludeRemain={recommendation.recommendation.ignoreRemains}
            />
          );
        })}
      </div>
      <div css={headerContainer}>
        <Link css={linkStyle} href="/stampcard">
          <FontAwesomeIcon icon={faChevronLeft} css={iconMargin} />
          スタンプカードに戻る
        </Link>
      </div>
    </>
  );
}
