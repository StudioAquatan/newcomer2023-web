import type { AppPropsWithLayout } from "next/app";
import { useEffect } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import Gtag from "../components/Gtag";
import Layout from "../components/Layout";
import ErrorModal from "../components/error/ErrorModal";
import Footer from "../components/footers/Footer";
import { useRouterHistoryRecorder } from "../store/router";
import { useSetIsMobile } from "../store/userAgent";

import "../styles/GenJyuuGothic-P-Bold.css";
import "../styles/GenJyuuGothic-P-Normal.css";
import "../styles/GenShinGothic-P-Bold.css";
import "../styles/GenShinGothic-P-Normal.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { setIsMobile } = useSetIsMobile();

  // 初回だけ動かすやつ
  useEffect(() => {
    // スマホ判定用にUserAgentを取得しておく
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useRouterHistoryRecorder();

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
      <Gtag />
      {getLayout(<Component {...pageProps} />)}
      <ErrorModal />
    </Layout>
  );
}
