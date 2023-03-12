import { css, Theme } from "@emotion/react";
import { GenJyuuGothicP } from "./fonts/GenJyuuGoithcP";
import { GenShinGothicP } from "./fonts/GenShinGoithcP";

export const globalStyles = (theme: Theme) => css`
  ${GenJyuuGothicP}
  ${GenShinGothicP}
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

  /* stylelint-disable selector-id-pattern */
  #__next {
    display: flex;
    flex-direction: column;
  }
  /* stylelint-enable selector-id-pattern */

  main {
    flex-grow: 1; /* 親要素にflexが必要なのでmainを用意している */
    min-height: 100svh;
  }
`;
