import { css } from "@emotion/react";

type AnswerRadioButtonProps = {
  questionId: string;
  labels: string[];
  padding?: string;
};

const container = css`
  display: table;
  padding: 0;
  padding-top: 1rem;
  margin: 0;
`;

const item = css`
  position: relative;
  display: table-cell;

  /* ホバー時のラジオボタン下の文字色 */
  &:hover label {
    color: #ffc8df;
  }

  /* ホバー時のラジオボタンの色 */
  &:hover > div > div {
    border: 5px solid #ffc8df;
  }
`;

const itemConatiner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;

  /* チェック時のラジオボタン下の文字色 */
  & > input[type="radio"]:checked + label {
    color: #ff8dbd;
  }

  /* チェック時のラジオボタンの色 */
  & > input[type="radio"]:checked + label + div {
    border: 5px solid #ff8dbd;
  }

  /* チェック時のラジオボタンの中心の色 */
  & > input[type="radio"]:checked + label + div::before {
    background: #ff8dbd;
  }
`;

const hiddenRadioButton = css`
  height: 0;
  visibility: hidden;
`;

const checkedRadioButton = css`
  position: absolute;
  display: block;
  width: 25px;
  height: 25px;
  border: 5px solid #555;
  border-radius: 50%;
  transition: border 0.1s linear;

  /*
   * ラジオボタンの中心の点
   * ここをチェック時に色を変える
   */
  &::before {
    position: absolute;
    top: 5px;
    left: 5px;
    display: block;
    width: 15px;
    height: 15px;
    margin: auto;
    content: "";
    border-radius: 50%;
    transition: background 0.1s linear;
  }
`;

const labelStyle = (padding: string) => css`
  z-index: 1;
  padding-top: 50px;
  padding-right: ${padding};
  padding-left: ${padding};
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s linear;
`;

export default function AnswerRadioButton({
  questionId,
  labels,
  padding = "0px",
}: AnswerRadioButtonProps) {
  return (
    <ul css={container}>
      {labels.map((label, index) => {
        return (
          <li key={index} css={item}>
            <div css={itemConatiner}>
              <input
                id={"question_id_" + questionId + "_" + index}
                type="radio"
                name={"question_id_" + questionId}
                css={hiddenRadioButton}
              />
              <label
                htmlFor={"question_id_" + questionId + "_" + index}
                css={labelStyle(padding || "0px")}
              >
                {label}
              </label>
              <div css={checkedRadioButton} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
