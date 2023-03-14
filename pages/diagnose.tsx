import { useState } from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import ProgressBar from "../components/questions/ProgressBar";
import QuestionForm from "../components/questions/QuestionForm";
import {
  useQuestionList,
  useQuestionListSetter,
  useQuestionResultMap,
} from "../store/question";

type DiagnoseProps = {
  questions: Array<Question>;
};

function Progress() {
  const questionsLength = Math.max(useQuestionList().length, 1);
  const answeredLength = useQuestionResultMap().size;
  return (
    <ProgressBar total={questionsLength} passed={answeredLength + 1} text />
  );
}

export default function Diagnose({ questions }: DiagnoseProps) {
  // TODO: 質問を答えるとcurrentが1ずつ増えるようにsetStateする
  const [current] = useState(0);

  const isReady = useQuestionListSetter(questions);

  if (!isReady) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Progress />
      <QuestionForm questions={questions} currentQuestion={current} />
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
