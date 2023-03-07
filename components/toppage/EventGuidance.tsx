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
  font-family: GenShinGothic-P, sans-serif;
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

const datePadding = css`
  padding: 0;
  margin: 0;
`;

const spanDt = css`
  padding-right: 1rem;
  border-right: 1px solid black;
`;

const spanDd = css`
  padding-left: 1rem;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export default function EventGuidance() {
  return (
    <div css={container}>
      <p css={title}>イベント案内</p>
      <div css={contents}>
        <p css={datePadding}>
          <span css={spanDt}>開催日</span>
          <span css={spanDd}>2023年4月18日〜21日</span>
        </p>
      </div>
    </div>
  );
}
