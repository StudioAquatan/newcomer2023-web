import { css } from "@emotion/react";

type AnswerRadioButtonProps = {
  labels: Label[];
  answer?: number;
  onChange?: (answer: number) => void;
  direction?: Direction;
  padding?: string;
};

export type Label = {
  id: number;
  text: string;
};

type Direction = "vertical" | "horizontal";

const container = (direction: Direction) => {
  const directionStyle = () => {
    switch (direction) {
      case "vertical":
        return css`
          display: flex;
          flex-direction: column;
        `;
      case "horizontal":
        return css`
          display: table;
        `;
    }
  };

  return css`
    ${directionStyle()}

    padding: 0;
    padding-top: 1rem;
    margin: 0;
  `;
};

const item = (direction: Direction) => {
  const directionStyle = () => {
    switch (direction) {
      case "vertical":
        return css`
          display: block;
        `;
      case "horizontal":
        return css`
          display: table-cell;
        `;
    }
  };
  return css`
    position: relative;
    ${directionStyle()}

    /* ホバー時のラジオボタン下の文字色 */
    &:hover label {
      color: #ffc8df;
    }

    /* ホバー時のラジオボタンの色 */
    &:hover > div > div {
      border: 5px solid #ffc8df;
    }
  `;
};

const itemConatiner = (direction: Direction) => {
  const flexDirection = () => {
    switch (direction) {
      case "vertical":
        return;
      case "horizontal":
        return css`
          flex-direction: column;
        `;
    }
  };

  return css`
    display: flex;
    ${flexDirection()}

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
};

const hiddenRadioButton = css`
  height: 0;
  visibility: hidden;
`;

const checkedRadioButton = (direction: Direction) => {
  const buttonPosition = () => {
    switch (direction) {
      case "vertical":
        return css`
          left: 30px;
        `;
      case "horizontal":
        return;
    }
  };

  return css`
    position: absolute;
    display: block;
    ${buttonPosition()}

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
};

const labelStyle = (direction: Direction, padding: string) => {
  const paddingStyle = () => {
    switch (direction) {
      case "vertical":
        return css`
          padding: 20px 0;
          padding-right: 30px;
          padding-left: 60px;
        `;
      case "horizontal":
        return css`
          padding-top: 50px;
          padding-right: ${padding};
          padding-left: ${padding};
          text-align: center;
        `;
    }
  };
  return css`
    z-index: 1;
    ${paddingStyle()}

    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.1s linear;
  `;
};

export default function AnswerRadioButton({
  labels,
  onChange,
  direction = "horizontal",
  padding = "0px",
  answer,
}: AnswerRadioButtonProps) {
  return (
    <ul css={container(direction)}>
      {labels.map((label, index) => {
        return (
          <li key={index} css={item(direction)}>
            <div css={itemConatiner(direction)}>
              <input
                id={"question_" + index}
                type="radio"
                name={"question_" + index}
                css={hiddenRadioButton}
                onChange={() => {
                  onChange && onChange(label.id);
                }}
                checked={label.id === answer}
              />
              <label
                htmlFor={"question_" + index}
                css={labelStyle(direction, padding || "0px")}
              >
                {label.text}
              </label>
              <div css={checkedRadioButton(direction)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
