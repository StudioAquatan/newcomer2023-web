import { css, keyframes, Theme } from "@emotion/react";
import React from "react";

type Props = {
  direction: "right" | "bottom";
};

const balloonStyle = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  min-width: 120px;
  max-width: 80vw;
  padding: 1rem;
  font-size: 1.8rem;
  color: ${theme.colors.balloon.textColor};
  background: ${theme.colors.balloon.backgroundColor};
  border-radius: 4px;
  transition: opacity 0.4s linear;

  &::before {
    position: absolute;
    content: "";
    border: 12px solid transparent;
  }
`;

const rightStyle = (theme: Theme) => css`
  margin-right: 12px;

  &::before {
    top: 50%;
    left: 100%;
    margin-top: -12px;
    border-left: 12px solid ${theme.colors.balloon.backgroundColor};
  }
`;

const bottomStyle = (theme: Theme) => css`
  margin-bottom: 12px;

  &::before {
    top: 100%;
    left: 50%;
    margin-left: -12px;
    border-top: 12px solid ${theme.colors.balloon.backgroundColor};
  }
`;

export default function Balloon({
  children,
  direction,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement> & Props>) {
  return (
    <div
      css={[balloonStyle, direction === "bottom" ? bottomStyle : rightStyle]}
      {...props}
    >
      {children}
    </div>
  );
}

const balloonWrapper = css`
  position: relative;
`;

const balloonAnimation = keyframes`
  0% {
    bottom: 100%;
  }

  40% {
    bottom: calc(100% - 0.5rem);
  }

  100% {
    bottom: 100%;
  }
`;

const balloonContainer = css`
  position: absolute;
  bottom: 100%;
  width: 100%;
`;

const balloonContainerAnimated = css`
  animation: ${balloonAnimation} 0.5s linear infinite;
`;

type ContainerProps = {
  balloonContent?: React.ReactNode;
  animated?: boolean;
} & Props;

export function BalloonContainer({
  balloonContent,
  direction,
  animated,
  children,
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <div css={balloonWrapper}>
      {balloonContent && (
        <div
          css={[balloonContainer, animated ? balloonContainerAnimated : null]}
        >
          <Balloon direction={direction}>{balloonContent}</Balloon>
        </div>
      )}
      {children}
    </div>
  );
}
