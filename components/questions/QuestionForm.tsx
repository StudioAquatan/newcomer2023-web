import { css } from "@emotion/react";
import { Question } from "../../api-client/@types";
import { useCurrentPager, useAnswer } from "../../store/question";
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
  const { next } = useCurrentPager();

  const handleChange = (answerId: number) => {
    setAnswer(answerId);
    // TODO: transition
    next();
  };

  if (!question) return null;

  return (
    <div css={container}>
      <OneQuestion
        answerId={answerId}
        question={question}
        onChange={handleChange}
      />
    </div>
  );
}
