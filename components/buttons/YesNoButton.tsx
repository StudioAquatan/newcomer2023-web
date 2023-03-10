import AnswerRadioButton, { Label } from "./AnswerRadioButton";

type YesNoButtonProps = {
  questionId: string;
  onChange?: (questionId: string, answer: number) => void;
};

const YesNoButtonLabels: Label[] = [
  { id: 1, text: "はい" },
  { id: 0, text: "いいえ" },
];

export default function YesNoRadioButton({
  questionId,
  onChange,
}: YesNoButtonProps) {
  return (
    <AnswerRadioButton
      questionId={questionId}
      labels={YesNoButtonLabels}
      onChange={onChange}
      padding={"5vw"}
    />
  );
}
