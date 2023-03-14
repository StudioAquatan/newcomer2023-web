import { css } from "@emotion/react";
import { Question as QuestionType } from "../../api-client/@types";
import ChoiseButton from "../buttons/ChoiseButton";
import FiveRadioButton from "../buttons/FiveRadioButton";
import YesNoRadioButton from "../buttons/YesNoButton";

type QuestionProps = {
  question: QuestionType;
  answerId?: number;
  onChange?: (answerId: number) => void;
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

const AnswerButton = ({ question, onChange, answerId }: QuestionProps) => {
  switch (question.questionType) {
    case "yesno":
      return <YesNoRadioButton answerId={answerId} onChange={onChange} />;
    case "five":
      return <FiveRadioButton answerId={answerId} onChange={onChange} />;
    case "choice":
      return (
        <ChoiseButton
          answerId={answerId}
          question={question}
          onChange={onChange}
        />
      );
  }
};

// TODO: ここで、question.questionTypeに応じて、適切なコンポーネントを呼び出す
export default function OneQuestion(props: QuestionProps) {
  const { question } = props;
  return (
    <fieldset css={container}>
      <p css={questionText}>Q. {question.questionText}</p>
      <AnswerButton {...props} />
    </fieldset>
  );
}
