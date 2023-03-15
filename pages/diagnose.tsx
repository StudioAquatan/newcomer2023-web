import { css, useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import MetaHead from "../components/MetaHead";
import ColorBorderButton from "../components/buttons/ColorBorderButton";
import JumpingLogoLoader from "../components/loaders/JumpingLogoLoader";
import ProgressBar from "../components/questions/ProgressBar";
import QuestionForm from "../components/questions/QuestionForm";
import { usePutRecommendation } from "../hooks/recommendation";
import {
  useCurrentQuestion,
  useIsAnswerReady,
  useQuestionListSetter,
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
  const theme = useTheme();
  const isReady = useIsAnswerReady();
  const putRecommend = usePutRecommendation();
  const answers = useQuestionResultMap();
  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // 診断結果待ち
    onClick();

    await putRecommend(answers);

    setTimeout(() => {
      push("/stampcard");
    }, 3000);
  };

  return (
    <div css={buttonContainer(isReady)}>
      <form onSubmit={handleSubmit}>
        <ColorBorderButton
          label="診断結果を見る"
          textColor={theme.colors.button.enable.backgroundColor}
          borderColor={theme.colors.button.enable.backgroundColor}
          fontSize="2.4rem"
        />
      </form>
    </div>
  );
}

export default function Diagnose({ questions }: DiagnoseProps) {
  const [diagnoseLoading, setDiagnoseLoading] = useState(false);
  const [stampCardLoading, setStampCardLoading] = useState(false);
  const isReady = useQuestionListSetter(questions);
  const { question } = useCurrentQuestion();

  useEffect(() => {
    setTimeout(() => {
      setDiagnoseLoading(true);
    }, 3000);
  }, []);

  if (!isReady || !question || !diagnoseLoading) {
    return <JumpingLogoLoader label="診断を準備中..." pageMode />;
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
