import { globalStyles } from "../styles/globals";
import { Global, ThemeProvider } from "@emotion/react";
import { sakura } from "../themes/sakura";

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={sakura}>
        <Global styles={globalStyles} />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
