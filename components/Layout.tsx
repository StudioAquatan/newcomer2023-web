import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={sakura}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </>
  );
}
