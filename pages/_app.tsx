import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { globalStyles } from "../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}
