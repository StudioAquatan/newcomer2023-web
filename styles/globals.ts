import { css, Theme } from "@emotion/react";

export const globalStyles = (theme: Theme) => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 62.5%;
    background-color: ${theme.colors.backgroundColor};
  }
`;
