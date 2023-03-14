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
  const { next, isLastQuestion } = useCurrentQuestion();
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

  if (!question) return null;

  return (
    <div css={container}>
      <OneQuestion
        answerId={answerId}
        question={question}
        onChange={handleChange}
        transition={isInTransition}
      />
    </div>
  );
}
