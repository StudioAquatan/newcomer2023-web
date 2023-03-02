import { css, useTheme } from "@emotion/react";
import React from "react";

const container = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: ${theme.colors.storyLike.normalTextColor};
    background-color: ${theme.colors.storyLike.backgroundColor};
  `;
};

const contentHolder = css`
  flex-grow: 1;
  overflow: hidden;
`;

const contentBox = (page: number) => css`
  display: flex;
  flex-direction: row;
  height: 100%;
  transform: translateX(-${page * 100}vw);
`;

const contentContainer = css`
  flex-shrink: 0;
  width: 100vw;
`;

const progressContainer = css`
  padding: 1rem;
`;

const paddedContainer = css`
  padding: 2rem;
`;

type PagerProps = { currentPage: number };

export function ContentPager({
  children,
  currentPage,
}: React.PropsWithChildren<PagerProps>) {
  return (
    <div css={contentHolder}>
      <div css={contentBox(currentPage)}>{children}</div>
    </div>
  );
}

export function ContentContainer({ children }: React.PropsWithChildren) {
  return <div css={contentContainer}>{children}</div>;
}

export function PaddedContainer({ children }: React.PropsWithChildren) {
  return <div css={paddedContainer}>{children}</div>;
}

export function ProgressContainer({ children }: React.PropsWithChildren) {
  return <div css={progressContainer}>{children}</div>;
}

export default function StoryLikeContainer({
  children,
}: React.PropsWithChildren) {
  return <div css={container}>{children}</div>;
}
