import { css } from "@emotion/react";
import MetaHead from "../components/MetaHead";
import Header from "../components/headers/Header";
import { useIsMobile } from "../store/userAgent";

const heroStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background-color: rgb(0 0 0 / 10%);
  background-image: url("/toppage/hero.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
`;

const pageTitle = css`
  font-size: 3.5rem;
  text-shadow: 2px 2px 2px #fff, -2px 2px 2px #fff, 2px -2px 2px #fff,
    -2px -2px 2px #fff;
`;

const exchangePageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  line-height: 1.8;

  h2 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 1.6rem;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  ol {
    margin: 1rem 0;
  }

  li {
    font-size: 1.6rem;
  }
`;

export default function Exchange() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <MetaHead
        title="景品交換の手順"
        description="景品交換会場での手順を確認しよう！"
      />
      <div css={heroStyle}>
        <Header isMobile={isMobile} />
        <h1 css={pageTitle}>景品交換の手順</h1>
      </div>
      <div css={exchangePageStyle}>
        <p>スタンプが集まったら景品交換に行こう！</p>
        <div>
          <h2>持ち物</h2>
          <p>学生証</p>
        </div>
        <div>
          <h2>交換手順</h2>
          <ol>
            <li>景品交換会場（ここに会場名が入る）に行く</li>
            <li>会場で学生証と、このページ下のスタンプの数を係員に見せる</li>
            <li>交換したい回数を係員に伝える</li>
            <li>景品を交換する</li>
          </ol>
        </div>
        <div>
          <h2>交換条件</h2>
          <p>
            スタンプ3個につき、1回景品と交換できます
            <wbr /> （最大3回）
          </p>
          <p>あなたは現在スタンプを</p>
          <p>7個</p>
          <p>獲得しています</p>
        </div>
        {/* ここにスタンプカードを表示する */}
      </div>
    </>
  );
}
