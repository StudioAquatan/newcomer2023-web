import { css, useTheme } from "@emotion/react";

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
  total: number;
  passed: number;
};

export default function ProgressBar({ total, passed }: ProgressBarProps) {
  if (total === 0) {
    throw new Error("Total pages must be greater than 0");
  }
  return (
    <div css={container}>
      <span css={progressBar(passed / total)} />
    </div>
  );
}
