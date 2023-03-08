import { css } from "@emotion/react";
import { Question as QuestionType } from "../../api-client/@types";
import ChoiseButton from "../buttons/ChoiseButton";
import FiveRadioButton from "../buttons/FiveRadioButton";
import YesNoRadioButton from "../buttons/YesNoButton";

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

const questionText = css`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;

const AnswerButton = ({ question }: { question: QuestionType }) => {
  switch (question.questionType) {
    case "yesno":
      return <YesNoRadioButton questionId={question.id} />;
    case "five":
      return <FiveRadioButton questionId={question.id} />;
    case "choice":
      if (question.answers === undefined) {
        throw new Error(
          "選択肢が設定されていません: Question ID: " + question.id
        );
      }
      return (
        <ChoiseButton questionId={question.id} answers={question.answers} />
      );
  }
};

// TODO: ここで、question.questionTypeに応じて、適切なコンポーネントを呼び出す
export default function OneQuestion({ question }: QuestionProps) {
  return (
    <fieldset css={container}>
      <p css={questionText}>Q. {question.questionText}</p>
      <AnswerButton question={question} />
    </fieldset>
  );
}
