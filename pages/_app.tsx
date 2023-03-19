import type { AppPropsWithLayout } from "next/app";
import { useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import Layout from "../components/Layout";
import ErrorModal from "../components/error/ErrorModal";
import Footer from "../components/footers/Footer";
import JumpingLogoLoader from "../components/loaders/JumpingLogoLoader";
import { initMockServer, initMockWorker } from "../mocks";
import { useRouterHistoryRecorder } from "../store/router";
import { useSetIsMobile } from "../store/userAgent";

import "../styles/GenJyuuGothic-P-Bold.css";
import "../styles/GenJyuuGothic-P-Normal.css";
import "../styles/GenShinGothic-P-Bold.css";
import "../styles/GenShinGothic-P-Normal.css";

const isMocking = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

if (isMocking) {
  initMockServer();
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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

  useRouterHistoryRecorder();

  // フラグが登録中を示す(=== true)なら登録中の旨を表示する
  if (isMockWorkerRegistering) {
    return <JumpingLogoLoader label="Mock worker is registering..." pageMode />;
  }

  // デフォルトのレイアウトはFooter付き
  // 各ページでgetLayoutを定義することで、ページごとにレイアウトを変更できる
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <main>{page}</main>
        <Footer />
      </>
    ));
  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
      <ErrorModal />
    </Layout>
  );
}
