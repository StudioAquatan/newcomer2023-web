import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
// import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import { useOrganizationsMap } from "../hooks/organizations";
import { useSetOrganizationsMap } from "../store/organizationsMap";
import { useSetIsMobile } from "../store/userAgent";
import { globalStyles } from "../styles/globals";
import { sakura } from "../themes/sakura";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  const [isActiveMockWorker, setIsActiveMockWorker] = useState(
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled" ? false : true
  );

  const { setIsMobile } = useSetIsMobile();
  const { setOrganizationsMap } = useSetOrganizationsMap();
  const { data: organizationsMap } = useOrganizationsMap();

  // 初回だけ動かすやつ
  useEffect(() => {
    // スマホ判定用にUserAgentを取得しておく
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });

    // 何度も団体情報取得API叩かなくても良いように
    if (organizationsMap !== undefined) {
      setOrganizationsMap({ organizationsMap: organizationsMap });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    async function initMocks() {
      require("../mocks");
      setIsActiveMockWorker(true);
    }

    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      initMocks();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isActiveMockWorker) {
    return <div>Waiting for Mock Worker...</div>;
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
