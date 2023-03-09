import AnswerRadioButton, { Label } from "./AnswerRadioButton";

type YesNoButtonProps = {
  questionId: string;
};

const YesNoButtonLabels: Label[] = [
  { id: 1, text: "はい" },
  { id: 0, text: "いいえ" },
];

export default function YesNoRadioButton({ questionId }: YesNoButtonProps) {
  return (
    <AnswerRadioButton
      questionId={questionId}
      labels={YesNoButtonLabels}
      padding={"5vw"}
    />
  );
}
