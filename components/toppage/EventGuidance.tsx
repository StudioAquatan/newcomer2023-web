import { css, Theme } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.2rem;
`;

const title = (theme: Theme) => css`
  margin: 0;
  margin-bottom: 1.6rem;
  font-size: 4.8rem;
  font-weight: bold;
  color: ${theme.colors.normalTextColor};

  @media screen and (max-width: 1080px) {
    font-size: 4rem;
  }
`;

const contents = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 3.2rem;
  color: ${theme.colors.normalTextColor};

  @media screen and (max-width: 1080px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 512px) {
    font-size: 1.9rem;
  }

  /* @media screen and (max-width: 280px) {
    font-size: 1.8rem;
  } */
`;

const contentsDl = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const contentsDt = css`
  width: calc(40% - 1rem - 1px);
  padding-right: 1rem;
  text-align: right;
  border-right: 1px solid #000;
`;

const contentsDd = css`
  width: calc(60% - 1rem);
  padding-left: 1rem;
  margin: 0;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export default function EventGuidance() {
  return (
    <div css={container}>
      <p css={title}>イベント案内</p>
      <div css={contents}>
        <dl css={contentsDl}>
          <dt css={contentsDt}>開催日</dt>
          <dd css={contentsDd}>2023年4月6日</dd>
          <dt css={contentsDt}>場所</dt>
          <dd css={contentsDd}>
            京都工芸繊維大学 <wbr />
            体育館
          </dd>
        </dl>
      </div>
    </div>
  );
}
