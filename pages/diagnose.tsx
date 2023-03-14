import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import ProgressBar from "../components/questions/ProgressBar";
import QuestionForm from "../components/questions/QuestionForm";
import { useCurrentQuestion, useQuestionListSetter } from "../store/question";

type DiagnoseProps = {
  questions: Array<Question>;
};

function Progress() {
  const { total, current } = useCurrentQuestion();
  return <ProgressBar total={total} passed={current + 1} text />;
}

export default function Diagnose({ questions }: DiagnoseProps) {
  const isReady = useQuestionListSetter(questions);
  const { question } = useCurrentQuestion();

  if (!isReady || !question) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Progress />
      <QuestionForm question={question} />
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
