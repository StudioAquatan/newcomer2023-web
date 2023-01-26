import { css } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = css`
  margin: 0;
  margin-bottom: 1.6rem;
  font-size: 4.8rem;
  font-weight: bold;

  @media screen and (max-width: 1080px) {
    font-size: 4rem;
  }
`;

const contents = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const contentPStyle = css`
  margin: 0;
  font-size: 3.2rem;

  @media screen and (max-width: 1080px) {
    font-size: 2.8rem;
  }
`;

export default function EventGuidance() {
  return (
    <div css={container}>
      <p css={title}>イベント案内</p>
      <div css={contents}>
        <p css={contentPStyle}>開催日:2023年4月6日</p>
        <p css={contentPStyle}>場所:京都工芸繊維大学 体育館</p>
      </div>
    </div>
  );
}
