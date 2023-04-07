import { css } from "@emotion/react";
import MetaHead from "../components/MetaHead";
import {
  ExchangeDescription,
  ExchangeSection,
  ExchangeTitle,
} from "../components/exchange/Exchange";
import ExchangeStampCard from "../components/exchange/StampCard";
import StampCount from "../components/exchange/StampCount";
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

  ol {
    margin: 1rem 0;
  }

  li {
    font-size: 2.4rem;
  }
`;

const exchangePageContents = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
        <div css={exchangePageContents}>
          <ExchangeSection>
            <ExchangeDescription>
              スタンプが集まったら
              <wbr />
              景品交換に行こう！
            </ExchangeDescription>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeTitle>持ち物</ExchangeTitle>
            <ExchangeDescription>学生証</ExchangeDescription>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeTitle>交換手順</ExchangeTitle>
            <ol>
              <li>景品交換会場（ここに会場名が入る）に行く</li>
              <li>会場で学生証と、このページ下のスタンプの数を係員に見せる</li>
              <li>交換したい回数を係員に伝える</li>
              <li>景品を交換する</li>
            </ol>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeTitle>交換条件</ExchangeTitle>
            <ExchangeDescription>
              スタンプ3個につき、1回景品と交換できます
              <wbr /> （最大3回）
            </ExchangeDescription>
          </ExchangeSection>
          <ExchangeSection>
            <StampCount />
            <ExchangeStampCard />
          </ExchangeSection>
        </div>
      </div>
    </>
  );
}
