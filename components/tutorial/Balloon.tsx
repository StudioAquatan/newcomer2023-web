import { css, Theme } from "@emotion/react";
import React from "react";

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
    top: 50%;
    left: 100%;
    margin-top: -12px;
    content: "";
    border: 12px solid transparent;
    border-left: 12px solid ${theme.colors.backgroundColor};
  }
`;

export default function Balloon({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div css={balloonStyle} {...props}>
      {children}
    </div>
  );
}
