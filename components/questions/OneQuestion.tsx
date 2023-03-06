import { css } from "@emotion/react";
import { Question as QuestionType } from "../../api/@types";
import FiveRadioButton from "../buttons/FiveRadioButton";

type QuestionProps = {
  question: QuestionType;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  border-width: 0;
`;

// TODO: ここで、question.questionTypeに応じて、適切なコンポーネントを呼び出す
export default function OneQuestion({ question }: QuestionProps) {
  return (
    <fieldset css={container}>
      <div>Q. {question.questionText}</div>
      <FiveRadioButton questionId={question.id} />
    </fieldset>
  );
}
