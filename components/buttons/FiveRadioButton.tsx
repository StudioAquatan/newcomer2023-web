import AnswerRadioButton from "./AnswerRadioButton";

type FiveRadioButtonProps = {
  questionId: string;
};

const FiveRadioButtonLabels = [
  "とても当てはまる",
  "やや当てはまる",
  "どちらとも言えない",
  "あまり当てはまらない",
  "全く当てはまらない",
];

export default function FiveRadioButton({ questionId }: FiveRadioButtonProps) {
  return (
    <AnswerRadioButton questionId={questionId} labels={FiveRadioButtonLabels} />
  );
}
