import { css } from "@emotion/react";
import { Question as QuestionType } from "../../api-client/@types";
import ChoiseButton from "../buttons/ChoiseButton";
import FiveRadioButton from "../buttons/FiveRadioButton";
import YesNoRadioButton from "../buttons/YesNoButton";

type QuestionProps = {
  question: QuestionType;
  answerId?: number;
  onChange?: (answerId: number) => void;
  transition?: boolean;
};

const container = (transition: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  border-width: 0;
  opacity: ${transition ? 0.0 : 1.0};
  transition: opacity 0.3s ease-in-out;
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
  const { question, transition = false } = props;
  return (
    <fieldset css={container(transition)}>
      <p css={questionText}>Q. {question.questionText}</p>
      <AnswerButton {...props} />
    </fieldset>
  );
}
