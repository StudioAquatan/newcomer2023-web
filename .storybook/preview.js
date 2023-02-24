import { globalStyles } from "../styles/globals";
import { Global, ThemeProvider } from "@emotion/react";
import { sakura } from "../themes/sakura";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { handlers } from "../mocks/handlers";

initialize();

const defaultHandlers = Object.entries(handlers).map(([api, statusHandler]) => {
  return {
    api: statusHandler.success,
  };
});

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={sakura}>
        <Global styles={globalStyles} />
        <Story />
      </ThemeProvider>
    </>
  ),
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: defaultHandlers,
  },
};
