import AnswerRadioButton from "./AnswerRadioButton";

type Answers = {
  /** 一意な管理番号 */
  id: number;
  /** 選択肢 */
  text: string;
};

type ChoiseButtonProps = {
  questionId: string;
  answers: Answers[];
};

export default function ChoiseButton({
  questionId,
  answers,
}: ChoiseButtonProps) {
  const answerLabels = answers.map((answer) => answer.text);
  // TODO: answerのidを使って、選択肢を管理する
  return (
    <AnswerRadioButton
      questionId={questionId}
      labels={answerLabels}
      direction="vertical"
    />
  );
}
