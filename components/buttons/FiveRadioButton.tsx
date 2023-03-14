import AnswerRadioButton, { Label } from "./AnswerRadioButton";

type FiveRadioButtonProps = {
  answerId?: number;
  onChange?: (answer: number) => void;
};

const FiveRadioButtonLabels: Label[] = [
  {
    id: 1,
    text: "とても当てはまる",
  },
  {
    id: 2,
    text: "やや当てはまる",
  },
  {
    id: 3,
    text: "どちらとも言えない",
  },
  {
    id: 4,
    text: "あまり当てはまらない",
  },
  {
    id: 5,
    text: "全く当てはまらない",
  },
];

export default function FiveRadioButton({
  onChange,
  answerId,
}: FiveRadioButtonProps) {
  return (
    <AnswerRadioButton
      labels={FiveRadioButtonLabels}
      onChange={onChange}
      answer={answerId}
    />
  );
}
