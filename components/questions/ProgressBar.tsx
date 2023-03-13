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
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  if (progress < 0 || progress > 1) {
    throw new Error("Progress must be between 0 and 1");
  }

  return (
    <div css={container}>
      <span css={progressBar(progress)} />
    </div>
  );
}
