import AnswerRadioButton from "./AnswerRadioButton";

type YesNoButtonProps = {
  questionId: string;
};

const YesNoButtonLabels = ["はい", "いいえ"];

export default function YesNoRadioButton({ questionId }: YesNoButtonProps) {
  return (
    <AnswerRadioButton
      questionId={questionId}
      labels={YesNoButtonLabels}
      padding={"5vw"}
    />
  );
}
