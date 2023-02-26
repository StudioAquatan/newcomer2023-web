import { css, useTheme } from "@emotion/react";
import React from "react";
import ProgressPagination from "../ProgressPagination";

const container = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    display: flex;
    flex-direction: column;
    height: calc(100vh - min(15px, 3vw) * 2);
    padding: min(15px, 3vw);
    color: ${theme.colors.storyLike.normalTextColor};
    background-color: ${theme.colors.storyLike.backgroundColor};
  `;
};

const contentContainer = css`
  flex-grow: 1;
  padding: 0.5rem;
`;

type Props = React.ComponentProps<typeof ProgressPagination>;

export default function StoryLikeContainer({
  children,
  numPages,
  currentPage,
  pageProgress,
}: React.PropsWithChildren<Props>) {
  return (
    <div css={container}>
      <ProgressPagination
        numPages={numPages}
        currentPage={currentPage}
        pageProgress={pageProgress}
      />
      <div css={contentContainer}>{children}</div>
    </div>
  );
}
