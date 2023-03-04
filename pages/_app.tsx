import type { AppPropsWithLayout } from "next/app";
import { useEffect } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import Layout from "../components/Layout";
import Footer from "../components/footers/Footer";
import { useRouterHistoryRecorder } from "../store/router";
import { useSetIsMobile } from "../store/userAgent";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  console.log("API Mocking Enabled");
  require("../mocks");
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { setIsMobile } = useSetIsMobile();

  // 初回だけUserAgentを取得して、状態を保存する
  useEffect(() => {
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useRouterHistoryRecorder();

  // デフォルトのレイアウトはFooter付き
  // 各ページでgetLayoutを定義することで、ページごとにレイアウトを変更できる
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Layout>
        {page}
        <Footer />
      </Layout>
    ));
  return getLayout(<Component {...pageProps} />);
}
