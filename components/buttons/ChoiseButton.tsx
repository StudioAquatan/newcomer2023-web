import { Question } from "../../api-client/@types";
import AnswerRadioButton from "./AnswerRadioButton";

type ChoiseButtonProps = {
  question: Question;
  answerId?: number;
  onChange?: (answerId: number) => void;
};

export default function ChoiseButton({
  question,
  onChange,
  answerId,
}: ChoiseButtonProps) {
  if (question.answers === undefined) {
    throw new Error("選択肢が設定されていません: Question ID: " + question.id);
  }

  const answerLabels = question.answers.map((answer) => {
    return { id: answer.id, text: answer.text };
  });

  return (
    <AnswerRadioButton
      labels={answerLabels}
      onChange={onChange}
      direction="vertical"
      answer={answerId}
    />
  );
}
