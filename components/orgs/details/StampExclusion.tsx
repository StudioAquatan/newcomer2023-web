import { css, keyframes } from "@emotion/react";
import {
  faCircleNotch,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  isRecommendationReady,
  useExcludeRecommendation,
  useRecommendation,
} from "../../../hooks/recommendation";
import ColorBorderButton from "../../buttons/ColorBorderButton";
import Balloon from "../../tutorial/Balloon";

const excludeContainer = css`
  position: absolute;
  right: 5vw;
  bottom: 5vw;
  display: flex;
  align-items: center;
  max-width: 80vw;
`;

const excludeButton = css`
  min-width: 8rem;
  min-height: 8rem;
  padding: 0;
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingStyle = css`
  animation: ${loadingAnimation} 0.5s linear 0s infinite;
`;

const excludeMessageStyle = (show: boolean) => css`
  opacity: ${show ? 1 : 0};
`;

export default function ExcludeButton({
  orgId,
  currentPage,
}: {
  orgId: string;
  currentPage: number;
}) {
  const { data: recommendation } = useRecommendation();
  const exclude = useExcludeRecommendation();
  const [loading, setLoading] = React.useState(false);
  const [tutorialShow, setTutorial] = React.useState(true);

  const pageOrg = React.useMemo(() => {
    if (!isRecommendationReady(recommendation)) return null;

    return recommendation.recommendation.orgs.find(
      ({ org }) => org.id === orgId
    );
  }, [orgId, recommendation]);

  React.useEffect(() => {
    setTutorial(true);
    const timer = setTimeout(() => setTutorial(false), 1500);
    return () => clearTimeout(timer);
  }, [pageOrg?.isExcluded]);

  if (!pageOrg) return null;
  if (pageOrg.stampSlot < 0 && !pageOrg.isExcluded) return null;

  if (currentPage > 1) return null;

  const handleButton = async () => {
    setLoading(true);
    if (pageOrg.isExcluded) {
      await exclude("remove", orgId);
    } else {
      await exclude("add", orgId);
    }
    setLoading(false);
  };

  return (
    <div css={excludeContainer}>
      <Balloon css={excludeMessageStyle(tutorialShow)}>
        {pageOrg.isExcluded
          ? "スタンプから除外中"
          : "ここをクリックしスタンプから除外"}
      </Balloon>
      <ColorBorderButton
        textColor="#aaa"
        borderColor="#aaa"
        onClick={handleButton}
        css={excludeButton}
        label={
          <FontAwesomeIcon
            css={loading ? loadingStyle : null}
            icon={
              loading ? faCircleNotch : pageOrg.isExcluded ? faEye : faEyeSlash
            }
          />
        }
      />
    </div>
  );
}
