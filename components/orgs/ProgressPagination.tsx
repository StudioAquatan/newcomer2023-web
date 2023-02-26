import { css, useTheme } from "@emotion/react";

const container = css`
  display: flex;
  width: 100%;
`;

const pageBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    width: 100%;
    height: 4px;
    margin: 0 2px;
    background-color: ${theme.colors.progressBar.backgroundColor};
  `;
};

const progressBar = (progress: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    width: ${progress * 100}%;
    height: 100%;
    background-color: ${theme.colors.progressBar.progressColor};
  `;
};

type ProgressPaginationProps = {
  numPages: number;
  currentPage: number;
  pageProgress: number;
};

export default function ProgressPagination({
  numPages,
  currentPage,
  pageProgress,
}: ProgressPaginationProps) {
  if (pageProgress < 0 || pageProgress > 1) {
    throw new Error("Progress must be between 0 and 1");
  }

  if (currentPage >= numPages) {
    throw new Error("Page number must be in page range");
  }

  return (
    <div css={container}>
      {new Array(numPages).fill(null).map((_value, index) => {
        if (index === currentPage) {
          return (
            <div css={pageBar} key={index}>
              <div css={progressBar(pageProgress)} />
            </div>
          );
        } else if (index < currentPage) {
          return (
            <div css={pageBar} key={index}>
              <div css={progressBar(1)} />
            </div>
          );
        } else {
          return (
            <div css={pageBar} key={index}>
              <div css={progressBar(0)} />
            </div>
          );
        }
      })}
    </div>
  );
}
