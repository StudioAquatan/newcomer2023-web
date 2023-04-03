import { css, useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  OrganizationFull,
  RecommendationItem,
  Visit,
} from "../../api-client/@types";
import { getOrgs } from "../../api-client/cached-response";
import ColorBorderButton from "../../components/buttons/ColorBorderButton";
import Header from "../../components/headers/Header";
import Confetti, { ConfettiProps } from "../../components/visited/Confetti";
import VisitedCard from "../../components/visited/VisitedCard";
import {
  NoRecommendation,
  useRecommendation,
} from "../../hooks/recommendation";
import { useGetVisits, useRecordVisits } from "../../hooks/visits";
import { useIsMobile } from "../../store/userAgent";

const confettiProps: ConfettiProps = {
  count: 50,
  size: 15,
  fall: {
    duration: {
      min: 30,
      max: 80,
    },
    delay: {
      min: 0,
      max: 100,
    },
  },
  piece: {
    duration: {
      min: 10,
      max: 20,
    },
  },
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerPadding = css`
  height: 6rem;
`;

const visitedCardContainer = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.8rem;
`;

const confettiContainer = css`
  position: absolute;
  top: -50vh;
  width: 100vw;
  height: 150vh;
`;

const buttonContainer = css`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 0 1.8rem;
    margin: 0;
    font-size: 2rem;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

const CloseButtonContainer = ({ children }: { children: React.ReactNode }) => {
  return <div css={buttonContainer}>{children}</div>;
};

const CloseButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  const theme = useTheme();

  const padding = css`
    padding: 1.8rem;
  `;

  return (
    <div css={padding}>
      <ColorBorderButton
        label={label}
        textColor={theme.colors.button.enable.backgroundColor}
        borderColor={theme.colors.button.enable.backgroundColor}
        fontSize="2.4rem"
        onClick={onClick}
      />
    </div>
  );
};

const countStamp = (recommedations: RecommendationItem[], visits: Visit[]) => {
  const orgsOnStampcard = recommedations.slice(0, 9);

  const count = orgsOnStampcard.reduce((acc, org) => {
    const isVisited = visits.some((visit) => visit.orgId === org.org.id);
    return acc + (isVisited ? 1 : 0);
  }, 0);

  return count;
};

type VisitedProps = {
  org: OrganizationFull;
};

export default function Visited({ org }: VisitedProps) {
  const router = useRouter();
  const { replace } = router;
  const { isMobile } = useIsMobile();
  const { token: visitsToken } = router.query;

  // stateにtokenが入っていて見えちゃうのは良くないけど...。
  const [savedVisitsToken, setSavedVisitsToken] = useState<string>(
    visitsToken as string
  );

  const { data: recommendationData } = useRecommendation();
  // useRecordVisitsはSWRを使わないと、エラーモーダル表示ができない(?)
  const { data: visitsRecordData } = useRecordVisits(savedVisitsToken);
  const { data: visitsData } = useGetVisits();

  const visitsCount = () => {
    if (
      visitsData === undefined ||
      recommendationData === undefined ||
      typeof recommendationData === "symbol"
    ) {
      return 0;
    } else if (visitsRecordData?.status === "success") {
      return countStamp(
        recommendationData.recommendation.orgs,
        visitsData ?? []
      );
    } else {
      return 0;
    }
  };

  const cardStatus = () => {
    if (visitsRecordData === undefined) {
      return "loading";
    } else if (visitsRecordData?.status === "success") {
      if (recommendationData === NoRecommendation) {
        return "no-stampcard";
      } else {
        return "success";
      }
    } else {
      return visitsRecordData?.status ?? "error";
    }
  };

  const showStampcard = () => {
    router.push("/stampcard/");
  };

  const openDiagnose = () => {
    router.push("/diagnose");
  };

  const closeButtonContents = () => {
    if (recommendationData === NoRecommendation) {
      return (
        <>
          <p>
            スタンプラリーのために、
            <wbr />
            まずは診断しよう！
          </p>
          <CloseButton label="診断を始める" onClick={() => openDiagnose()} />
        </>
      );
    } else if (typeof recommendationData === "object") {
      return (
        <CloseButton
          label="スタンプカードを表示"
          onClick={() => showStampcard()}
        />
      );
    } else {
      return <></>;
    }
  };

  // visitsTokenにアクセス可能になった時に、stateに値を保持しつつ
  // URLから表示を消しておく
  if (visitsToken !== undefined && savedVisitsToken === undefined) {
    setSavedVisitsToken(visitsToken as string);
    // tokenは履歴には残さない
    replace(
      {
        pathname: "/visits/[orgId]",
        query: { orgId: org.id },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <div css={container}>
      <div css={headerPadding}>
        <Header isMobile={isMobile} />
      </div>
      <div css={visitedCardContainer}>
        <VisitedCard
          orgName={org.shortName}
          logo={org.logo?.src || "/org_icons/default.png"}
          logoFocus={org.logoFocus ?? false}
          visitsCount={visitsCount()}
          cardStatus={cardStatus()}
        />
      </div>
      <CloseButtonContainer>{closeButtonContents()}</CloseButtonContainer>
      {/* アニメーションは初めてスタンプを取得した時のみ */}
      {visitsRecordData?.status === "success" && (
        <div css={confettiContainer}>
          <Confetti {...confettiProps} />
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const orgs = await getOrgs();

  const paths = orgs.map((org) => `/visits/${org.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = params;
  const orgs = await getOrgs();
  const org = orgs.find((e) => e.id === orgId);

  if (org === undefined) {
    throw Error("団体が見つかりませんでした ID: " + orgId);
  }

  return {
    props: {
      org,
    },
  };
}
