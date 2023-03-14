import { css, useTheme } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const progress = () => {
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
    margin: 0;
    background-color: ${theme.colors.progressBar.progressColor};
    border-radius: 8px;
    transition: width 0.2s linear;
  `;
};

const progressText = css`
  margin: 0.4rem;
  font-size: 2rem;
`;

type ProgressBarProps = {
  total: number;
  passed: number;
  text?: boolean;
};

export default function ProgressBar({ total, passed, text }: ProgressBarProps) {
  if (total === 0) {
    throw new Error("Total pages must be greater than 0");
  }
  return (
    <div css={container}>
      <div css={progress}>
        <p css={progressBar(passed / total)} />
      </div>
      {text && (
        <p css={progressText}>
          {passed} / {total}
        </p>
      )}
    </div>
  );
}
