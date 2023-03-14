import { css } from "@emotion/react";
import { useState } from "react";
import { Question } from "../../api-client/@types";
import { useCurrentQuestion, useAnswer } from "../../store/question";
import GlowingPinkButton from "../buttons/GlowingPinkButton";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  question: Question;
};

const container = css`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  align-items: center;
  margin-top: 5vh;
`;

const buttonContainer = (show: boolean) => {
  return css`
    opacity: ${show ? 1.0 : 0.0};
    transition: opacity 0.2s linear;
  `;
};

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
      <div css={buttonContainer(isLastQuestion && answerId >= 0)}>
        <GlowingPinkButton type="submit" text="診断結果を見る！" />
      </div>
    </div>
  );
}
