import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import MetaHead from "../components/MetaHead";
import ColorBorderButton from "../components/buttons/ColorBorderButton";
import JumpingLogoLoader from "../components/loaders/JumpingLogoLoader";
import { useModal } from "../components/modal";
import LimitNotice from "../components/questions/LimitNotice";
import ProgressBar from "../components/questions/ProgressBar";
import QuestionForm from "../components/questions/QuestionForm";
import {
  isRecommendationReady,
  usePutRecommendation,
  useRecommendation,
} from "../hooks/recommendation";
import {
  useCurrentQuestion,
  useIsAnswerReady,
  useQuestionListSetter,
  useQuestionReset,
  useQuestionResultMap,
} from "../store/question";

type DiagnoseProps = {
  questions: Array<Question>;
};

function Progress() {
  const { total, current } = useCurrentQuestion();
  return <ProgressBar total={total} passed={current + 1} text />;
}

const buttonContainer = (show: boolean) => {
  const showStyle = css`
    visibility: visible;
    opacity: 1;
  `;

  return css`
    display: flex;
    justify-content: center;
    margin: 10vh 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s linear;
    ${show ? showStyle : ""}
  `;
};

function SubmitButton({ onClick }: { onClick: () => void }) {
  const isReady = useIsAnswerReady();
  const putRecommend = usePutRecommendation();
  const answers = useQuestionResultMap();
  const { push } = useRouter();
  const reset = useQuestionReset();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // 診断結果待ち
    onClick();

    await putRecommend(answers);

    setTimeout(() => {
      push("/stampcard");
      reset();
    }, 3000);
  };

  return (
    <div css={buttonContainer(isReady)}>
      <form onSubmit={handleSubmit}>
        <ColorBorderButton
          label="診断結果を見る"
          fontSize="2.4rem"
          disabled={!isReady}
        />
      </form>
    </div>
  );
}

export default function Diagnose({ questions }: DiagnoseProps) {
  const [diagnoseLoading, setDiagnoseLoading] = useState(false);
  const [stampCardLoading, setStampCardLoading] = useState(false);
  const { data: recommendation } = useRecommendation();
  const isReady = useQuestionListSetter(questions);
  const { question, current } = useCurrentQuestion();
  const { ModalWrapper, open, close } = useModal();
  const { push } = useRouter();
  const [isConfirmWait, setConfirmWait] = useState(false);

  React.useEffect(() => {
    if (!isConfirmWait) {
      const timer = setTimeout(() => {
        setDiagnoseLoading(true);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isConfirmWait]);

  React.useEffect(() => {
    if (current === 0 && isRecommendationReady(recommendation)) {
      open();
      setConfirmWait(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendation, current]);

  const handleBack = () => {
    push("/stampcard");
  };

  const handleContinue = () => {
    setConfirmWait(false);
    close();
  };

  const ConfirmDialog = () => (
    <ModalWrapper>
      {isRecommendationReady(recommendation) && (
        <LimitNotice
          close={handleContinue}
          back={handleBack}
          remain={recommendation.recommendation.renewRemains}
        />
      )}
    </ModalWrapper>
  );

  if (!isReady || !question || !recommendation) {
    return <JumpingLogoLoader label="読み込み中..." pageMode />;
  }

  if (!diagnoseLoading) {
    return (
      <>
        <JumpingLogoLoader label="診断を準備中..." pageMode />
        <ConfirmDialog />
      </>
    );
  }

  if (stampCardLoading) {
    return <JumpingLogoLoader label="診断中..." pageMode />;
  }

  return (
    <div>
      <MetaHead
        title="部活動相性診断"
        description="いくつかの質問で、あなたにぴったりの部活動を診断"
      />
      <Progress />
      <QuestionForm question={question} />
      <SubmitButton
        onClick={() => {
          setStampCardLoading(true);
        }}
      />
      <ConfirmDialog />
    </div>
  );
}

export async function getStaticProps() {
  const questions = await apiClient.questions
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw new Error("Failed to fetch questions", error);
    });

  return {
    props: {
      questions: questions,
    },
  };
}

Diagnose.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
