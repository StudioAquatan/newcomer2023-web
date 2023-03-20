import { Global, ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { SWRConfig, SWRConfiguration } from "swr";
import { useError } from "../store/error";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { set: setError } = useError();
  const swrConfig: SWRConfiguration = useMemo(
    () => ({
      onError(error) {
        setError(error);
      },
    }),
    [setError]
  );
  return (
    <SWRConfig value={swrConfig}>
      <ThemeProvider theme={sakura}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </SWRConfig>
  );
}
