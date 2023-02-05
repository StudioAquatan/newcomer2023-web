import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
// import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import { useSetIsMobile } from "../store/userAgent";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

export default function App({ Component, pageProps }: AppProps) {
  const { setIsMobile } = useSetIsMobile();

  // 初回だけUserAgentを取得して、状態を保存する
  useEffect(() => {
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={sakura}>
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
