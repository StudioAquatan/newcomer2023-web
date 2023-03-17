import { css } from "@emotion/react";
import { useState } from "react";
import { Question } from "../../api-client/@types";
import { useCurrentQuestion, useAnswer } from "../../store/question";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  question: Question;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function QuestionForm({ question }: QuestionFormProps) {
  const [answerId, setAnswer] = useAnswer(question.id);
  const { next, back, isLastQuestion, current } = useCurrentQuestion();
  const [isInTransition, setTransition] = useState(false);

  const handleChange = (answerId: number) => {
    setAnswer(answerId);

    if (!isLastQuestion) {
      setTimeout(() => {
        setTransition(true);
      }, 50);
      setTimeout(() => {
        next();
        setTransition(false);
      }, 600);
    }
  };

  const handleBack = () => {
    // 今の質問を無効化
    setAnswer(-1);

    setTimeout(() => {
      setTransition(true);
    }, 50);
    setTimeout(() => {
      back();
      setTransition(false);
    }, 600);
  };

  if (!question) return null;

  return (
    <div css={container}>
      <OneQuestion
        answerId={answerId}
        question={question}
        onChange={handleChange}
        transition={isInTransition}
      />
      <button onClick={handleBack} disabled={current === 0}>
        もどる
      </button>
    </div>
  );
}
