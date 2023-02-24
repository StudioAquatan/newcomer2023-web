import { css, useTheme } from "@emotion/react";
import { Question } from "../../api/@types";

const container = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    width: 100%;
    height: 8px;
    background-color: ${theme.colors.progressBar.backgroundColor};
    border-radius: 8px;
  `;
};

const progressBar = (progress: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    width: ${progress * 100}%;
    height: 100%;
    background-color: ${theme.colors.progressBar.progressColor};
    border-radius: 8px;
  `;
};

type ProgressBarProps = {
  current: number;
  questions: Question[];
};

export default function ProgressBar({ questions, current }: ProgressBarProps) {
  return (
    <div css={container}>
      <p css={progressBar(current / questions.length)}></p>
    </div>
  );
}
