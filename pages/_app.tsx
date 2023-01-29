import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
// import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import { useSetIsMobile } from "../store/userAgent";
import { globalStyles } from "../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  const { setIsMobile } = useSetIsMobile();

  useEffect(() => {
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile({ isMobile: isMobile });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}
