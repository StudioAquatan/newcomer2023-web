import { css, Theme } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.2rem;
`;

const title = (theme: Theme) => css`
  margin: 0;
  margin-top: 4rem;
  margin-bottom: 1.6rem;
  font-family: GenJyuuGothic-P, sans-serif;
  font-size: 4.8rem;
  font-weight: bold;
  color: ${theme.colors.normalTextColor};
  text-align: center;
  word-break: keep-all;
  overflow-wrap: anywhere;

  @media screen and (max-width: 1080px) {
    font-size: 4rem;
  }
`;

const contentsTable = css`
  max-width: 650px;
  border-collapse: collapse;
`;

const subTitle = css`
  width: 10rem;
  padding: 1.6rem 0;
  vertical-align: top;
  border-bottom: 1px solid #000;

  h6 {
    margin: 0;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 2.4rem;
  }

  @media screen and (max-width: 400px) {
    width: 8rem;

    h6 {
      font-size: 2rem;
    }
  }
`;

const body = css`
  padding: 1.6rem 0;
  border-bottom: 1px solid #000;

  p {
    margin: 0;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 2rem;
    line-height: 1.8;

    @media screen and (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
`;

const noBorder = css`
  border: none;
`;

export default function EventGuidance() {
  return (
    <div css={container}>
      <h2 css={title}>
        全団体
        <wbr />
        同時開催
        <wbr />
        個別
        <wbr />
        説明会
      </h2>
      <table css={contentsTable}>
        <tbody>
          <tr>
            <td css={subTitle}>
              <h6>開催日</h6>
            </td>
            <td css={body}>
              <p>DAY1 2023年4月18日(火)</p>
              <p>DAY2 2023年4月19日(水)</p>
              <p>DAY3 2023年4月20日(木)</p>
              <p>DAY4 2023年4月21日(金)</p>
            </td>
          </tr>
          <tr>
            <td css={subTitle}>
              <h6>内容</h6>
            </td>
            <td css={body}>
              <p>新入生の疑問「この部・サークルってどんな部活？」を解決！</p>
              <p>各団体の部屋に行くとその団体の説明をしてもらえます！</p>
              <p>
                説明を聞いたらQRコードを読み込んでスタンプを押してもらおう！
              </p>
              <p>新歓委員会の本部に行って、景品と交換してもらおう！</p>
            </td>
          </tr>
          <tr>
            <td css={[subTitle, noBorder]}>
              <h6>注意</h6>
            </td>
            <td css={[body, noBorder]}>
              <p>各団体によって、説明会をしている日、場所が異なります</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
