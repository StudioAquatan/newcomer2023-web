import { css } from "@emotion/react";

type FiveRadioButtonProps = {
  questionId: string;
};

const radioButtonLabels = [
  "とても当てはまる",
  "やや当てはまる",
  "どちらとも言えない",
  "あまり当てはまらない",
  "全く当てはまらない",
];

const container = css`
  display: table;
  padding: 0;
  margin: 0;
`;

const item = css`
  display: table-cell;
`;

const itemConatiner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FiveRadioButton({ questionId }: FiveRadioButtonProps) {
  return (
    <ul css={container}>
      {radioButtonLabels.map((label, index) => {
        return (
          <li key={index} css={item}>
            <div css={itemConatiner}>
              <input
                id={"question_id_" + questionId + "_" + index}
                type="radio"
                name={"question_id_" + questionId}
              />
              {/* <label htmlFor={"question_id_" + questionId + "_" + index} /> */}
              <div>{label}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
