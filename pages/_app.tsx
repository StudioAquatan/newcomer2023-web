import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
// import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import { initMockServer, initMockWorker } from "../mocks";
import { useSetIsMobile } from "../store/userAgent";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

const isMocking = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

if (isMocking) {
  initMockServer();
}

export default function App({ Component, pageProps }: AppProps) {
  const { setIsMobile } = useSetIsMobile();

  // 初回だけ動かすやつ
  useEffect(() => {
    // スマホ判定用にUserAgentを取得しておく
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // モック用のService Workerが登録中かどうかのフラグ
  const [isMockWorkerRegistering, setIsMockWorkerRegistering] =
    useState(isMocking);
  useEffect(() => {
    // フラグが登録中を示す(=== true)なら実際に登録作業を行ってフラグをfalseにする
    if (isMockWorkerRegistering) {
      initMockWorker()?.then(() => void setIsMockWorkerRegistering(false));
    }
  });

  // フラグが登録中を示す(=== true)なら登録中の旨を表示する
  if (isMockWorkerRegistering) {
    return <div>Mock worker has not registered yet.</div>;
  }

  return (
    <ThemeProvider theme={sakura}>
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
