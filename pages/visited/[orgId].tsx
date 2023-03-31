import { css, useTheme } from "@emotion/react";
import { OrganizationFull } from "../../api-client/@types";
import { getOrgs } from "../../api-client/cached-response";
import ColorBorderButton from "../../components/buttons/ColorBorderButton";
import Header from "../../components/headers/Header";
import Confetti, { ConfettiProps } from "../../components/visited/Confetti";
import VisitedCard from "../../components/visited/VisitedCard";
import { useIsMobile } from "../../store/userAgent";

const confettiProps: ConfettiProps = {
  count: 50,
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
  display: flex;
  justify-content: center;
  margin: 1.8rem;
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
  align-items: center;
  justify-content: center;
`;

type VisitedProps = {
  org: OrganizationFull;
};

export default function Visited({ org }: VisitedProps) {
  const theme = useTheme();
  const { isMobile } = useIsMobile();

  return (
    <div css={container}>
      <div css={headerPadding}>
        <Header isMobile={isMobile} />
      </div>
      <div css={visitedCardContainer}>
        <VisitedCard
          fullName={org.fullName}
          logo={org.logo?.src || "/org_icons/default.png"}
          logoFocus={org.logoFocus ?? false}
        />
      </div>
      <div css={buttonContainer}>
        <ColorBorderButton
          label="閉じる"
          textColor={theme.colors.button.enable.backgroundColor}
          borderColor={theme.colors.button.enable.backgroundColor}
        />
      </div>
      <div css={confettiContainer}>
        <Confetti {...confettiProps} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const orgs = await getOrgs();

  const paths = orgs.map((org) => `/visited/${org.id}`);

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
