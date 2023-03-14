import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import MetaHead from "../components/MetaHead";
import GlowingPinkButton from "../components/buttons/GlowingPinkButton";
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
  return css`
    display: flex;
    justify-content: center;
    margin: 10vh 0;
    opacity: ${show ? 1.0 : 0.0};
    transition: opacity 0.2s linear;
  `;
};

function SubmitButton() {
  const isReady = useIsAnswerReady();
  const putRecommend = usePutRecommendation();
  const answers = useQuestionResultMap();
  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    await putRecommend(answers);
    await push("/stampcard");
  };

  return (
    <div css={buttonContainer(isReady)}>
      <form onSubmit={handleSubmit}>
        <GlowingPinkButton type="submit" text="診断結果を見る！" />
      </form>
    </div>
  );
}

export default function Diagnose({ questions }: DiagnoseProps) {
  const isReady = useQuestionListSetter(questions);
  const { question } = useCurrentQuestion();

  if (!isReady || !question) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <MetaHead
        title="部活動相性診断"
        description="いくつかの質問で、あなたにぴったりの部活動を診断"
      />
      <Progress />
      <QuestionForm question={question} />
      <SubmitButton />
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
