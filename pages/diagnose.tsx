import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";
import { Question } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import Layout from "../components/Layout";
import MetaHead from "../components/MetaHead";
import ColorBorderButton from "../components/buttons/ColorBorderButton";
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

function SubmitButton() {
  const isReady = useIsAnswerReady();
  const putRecommend = usePutRecommendation();
  const answers = useQuestionResultMap();
  const { push } = useRouter();
  const reset = useQuestionReset();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    await putRecommend(answers);
    reset();
    await push("/stampcard");
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
  const { data: recommendation } = useRecommendation();
  const isReady = useQuestionListSetter(questions);
  const { question, current } = useCurrentQuestion();
  const { ModalWrapper, open, close } = useModal();
  const { push } = useRouter();

  React.useEffect(() => {
    if (current === 0 && isRecommendationReady(recommendation)) {
      open();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendation, current]);

  const handleBack = () => {
    push("/stampcard");
  };

  if (!isReady || !question || !recommendation) {
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
      <ModalWrapper>
        {isRecommendationReady(recommendation) && (
          <LimitNotice
            close={close}
            back={handleBack}
            remain={recommendation.recommendation.renewRemains}
          />
        )}
      </ModalWrapper>
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
