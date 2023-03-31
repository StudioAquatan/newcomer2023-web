import { css, useTheme } from "@emotion/react";
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

export default function Visited() {
  const theme = useTheme();
  const { isMobile } = useIsMobile();

  return (
    <div css={container}>
      <div css={headerPadding}>
        <Header isMobile={isMobile} />
      </div>
      <div css={visitedCardContainer}>
        <VisitedCard
          orgId="1"
          fullName="StudioAquatan"
          logo="/org_icons/studioaquatan.png"
          logoFocus={false}
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
