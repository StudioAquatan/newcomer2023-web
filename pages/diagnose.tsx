import { useState } from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import ProgressBar from "../components/questions/ProgressBar";
import QuestionForm from "../components/questions/QuestionForm";

type DiagnoseProps = {
  questions: Array<Question>;
  initialCurrent: number;
};

export default function Diagnose({ questions, initialCurrent }: DiagnoseProps) {
  // TODO: 質問を答えるとcurrentが1ずつ増えるようにsetStateする
  const [current] = useState(initialCurrent);
  return (
    <div>
      <ProgressBar progress={current / questions.length} />
      <QuestionForm questions={questions} />
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
      initialCurrent: 0,
    },
  };
}
