import { css, Theme } from "@emotion/react";
import React from "react";

type Props = {
  direction: "right" | "bottom";
};

const balloonStyle = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  min-width: 120px;
  padding: 1rem;
  margin-right: 12px;
  font-size: 1.8rem;
  color: ${theme.colors.normalTextColor};
  background: ${theme.colors.backgroundColor};
  border-radius: 4px;
  transition: opacity 0.4s linear;

  &::before {
    position: absolute;
    content: "";
    border: 12px solid transparent;
  }
`;

const rightStyle = (theme: Theme) => css`
  &::before {
    top: 50%;
    left: 100%;
    margin-top: -12px;
    border-left: 12px solid ${theme.colors.backgroundColor};
  }
`;

const bottomStyle = (theme: Theme) => css`
  &::before {
    top: 100%;
    left: 50%;
    margin-left: -12px;
    border-top: 12px solid ${theme.colors.backgroundColor};
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
