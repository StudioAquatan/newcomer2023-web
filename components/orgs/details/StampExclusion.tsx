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
import { useModal } from "../../modal";
import LimitNotice from "../../questions/LimitNotice";
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

  // 表示している団体のおすすめ情報を取ってくる
  const pageOrg = React.useMemo(() => {
    if (!isRecommendationReady(recommendation)) return null;

    return recommendation.recommendation.orgs.find(
      ({ org }) => org.id === orgId
    );
  }, [orgId, recommendation]);

  // 除外判定変わったら吹き出し
  React.useEffect(() => {
    setTutorial(true);
    const timer = setTimeout(() => setTutorial(false), 1500);
    return () => clearTimeout(timer);
  }, [pageOrg?.isExcluded]);

  // 確認用modal
  const { ModalWrapper, open, close } = useModal();

  if (!isRecommendationReady(recommendation)) return null;

  if (!pageOrg) return null;
  if (pageOrg.stampSlot < 0 && !pageOrg.isExcluded) return null;

  if (currentPage > 1) return null;

  // トグル
  const handleButton = async () => {
    if (pageOrg.isExcluded) {
      setLoading(true);
      await exclude("remove", orgId);
    } else {
      // 確認を開く
      open();
    }
    setLoading(false);
  };

  // 確認OK
  const handleAdd = async () => {
    setLoading(true);
    close();
    await exclude("add", orgId);
    setLoading(false);
  };

  return (
    <>
      <ModalWrapper>
        <LimitNotice
          type="exclusion"
          remain={recommendation.recommendation.ignoreRemains}
          close={handleAdd}
          back={close}
        />
      </ModalWrapper>
      <div css={excludeContainer}>
        <Balloon css={excludeMessageStyle(tutorialShow)} direction="right">
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
                loading
                  ? faCircleNotch
                  : pageOrg.isExcluded
                  ? faEye
                  : faEyeSlash
              }
            />
          }
        />
      </div>
    </>
  );
}
