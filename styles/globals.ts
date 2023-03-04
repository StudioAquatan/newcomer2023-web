import { css, Theme } from "@emotion/react";
import { GenJyuuGothicP } from "./fonts/GenJyuuGoithcP";

export const globalStyles = (theme: Theme) => css`
  ${GenJyuuGothicP}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: GenJyuuGothic-P, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 62.5%;
    background-color: ${theme.colors.backgroundColor};
  }

  main {
    flex-grow: 1;
    min-height: 100vh;
  }
  /* stylelint-disable selector-id-pattern */
  #__next {
    display: flex;
    flex-direction: column;
  }
  /* stylelint-enable selector-id-pattern */
`;
