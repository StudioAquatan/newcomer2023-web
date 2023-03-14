import { css } from "@emotion/react";
import Header from "../components/headers/Header";
import { useIsMobile } from "../store/userAgent";

const container = css`
  max-width: 960px;
  min-height: 100svh;
  padding: 3.2rem;
  margin: 5rem auto;
  line-height: 1.8;
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);

  /* max-width + padding + margin */
  @media screen and (max-width: 1040px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    padding: 3.2rem 2rem;
    margin-top: 8rem;
    margin-bottom: 0;
  }

  h1 {
    margin: 0;
    margin-bottom: 2.4rem;
    font-size: 2.8rem;
    border-bottom: 1px solid #ccc;
  }

  h2 {
    margin: 0;
    margin-top: 5.6rem;
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    border-bottom: 1px solid #ccc;
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 1.6rem;
  }

  ul {
    margin: 1rem 0;
  }

  li {
    font-size: 1.6rem;
  }
`;

const Contents = () => {
  return (
    <div css={container}>
      <h1>プライバシーポリシー</h1>
      <p>
        新入生歓迎企画運営委員会、企画部irodori、あくあたん工房（以下「運営者」といいます）は、本サービスの運営にあたり、利用者の皆さまの個人情報を以下の通り取り扱います。
      </p>

      <h2>個人情報の収集と収集方法</h2>
      <p>
        運営者は、利用者や各活動団体から提供いただいた個人情報を第三者に漏洩することのないよう、厳重に保管いたします。
      </p>
      <p>
        本サービスでは、本サービスの利用を通じて、入力フォームや、その他運営者が定める方法を通じてユーザーが入力または送信する情報を収集します。
        また、ページを閲覧する際に利用者の皆さまの履歴情報を収集します。
        履歴情報には、IPアドレス、Cookie、ローカルストレージ、ご利用ブラウザ、OS、使用端末などの情報が含まれます。
      </p>
      <p>
        これらの情報はシステムの利便性向上やトラブル時の原因究明を目的に匿名で収集しており、個人を特定するものではありません。
      </p>

      <h2>個人情報を収集・利用する目的</h2>
      <p>
        本サービスは、大学の新歓企画として、各団体との相性診断を行うために作成されたものです。
        利用者が提供する回答を使用して、各団体との相性診断を行い、利用者に最適な団体を紹介することが主な目的です。
        個人情報は厳重に管理し、運営者代表から事前に許可を得ることなく以下の目的以外では使用いたしません。
      </p>
      <p>本サービスにおいて、個人情報を収集・利用する目的は以下の通りです。</p>
      <ul>
        <li>本サービスの提供、維持、改善のため</li>
        <li>新入生オリエンテーションの実施に関わる運営者からの連絡・調整</li>
        <li>大学に提出する活動報告書の作成</li>
      </ul>
      <p>
        なお、個人・活動団体が特定できない形式での統計的資料等の作成を行う場合があります。
      </p>

      <h2>個人情報の第三者への提供について</h2>
      <p>
        以下のいずれかに該当する場合、運営者代表の個人情報を運営者以外の第三者に開示する場合があります。
      </p>
      <ul>
        <li>運営者が大学に活動報告書を提出する場合</li>
        <li>司法機関または行政機関から法的義務を伴う要請を受けた場合</li>
        <li>大学から学則に基づく要請を受けた場合</li>
      </ul>

      <h2>本サービスが利用するアクセス解析ツール</h2>
      <p>
        当サービスではGoogle
        Analyticsを利用して、Cookieの仕様やログファイルの収集により、利用者の皆さまのIPアドレス、ご利用ブラウザ、OS、使用端末などの情報を収集しています。
        これらの情報はシステムの利便性向上やトラブル時の原因究明を目的に匿名で収集しており、個人を特定するものではありません。
        また、法律で定められた場合を除き、利用者の許可なくデータを第三者に開示することはありません。
      </p>
      <p>
        これらの情報はCookieを無効にするなどにより収集を拒否することが出来ます。
        詳細につきましては
        <a
          href="https://support.google.com/analytics/answer/6004245"
          target="_blank"
          rel="noopener noreferrer"
        >
          データの保護
        </a>
        などでご確認ください。 また、データのGoogle社による利用については
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
        </a>
        よりご確認ください。
      </p>
    </div>
  );
};

export default function PrivacyPolicy() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Header isMobile={isMobile} />
      <Contents />
    </>
  );
}
