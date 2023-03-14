import AnswerRadioButton, { Label } from "./AnswerRadioButton";

type YesNoButtonProps = {
  answerId?: number;
  onChange?: (answer: number) => void;
};

const YesNoButtonLabels: Label[] = [
  { id: 1, text: "はい" },
  { id: 0, text: "いいえ" },
];

export default function YesNoRadioButton({
  answerId,
  onChange,
}: YesNoButtonProps) {
  return (
    <AnswerRadioButton
      answer={answerId}
      labels={YesNoButtonLabels}
      onChange={onChange}
      padding={"5vw"}
    />
  );
}
