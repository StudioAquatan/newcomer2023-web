import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
// import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import { initMocks } from "../mocks";
import { useSetIsMobile } from "../store/userAgent";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMocks();
}

export default function App({ Component, pageProps }: AppProps) {
  const { setIsMobile } = useSetIsMobile();

  // 初回だけ動かすやつ
  useEffect(() => {
    // スマホ判定用にUserAgentを取得しておく
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
