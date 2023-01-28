import { css } from "@emotion/react";
import GlowingPinkButton from "../buttons/GlowingPinkButton";

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

export default function ClubList() {
  return (
    <div css={container}>
      <p css={title}>部活動一覧</p>
      <GlowingPinkButton text="こちら" href="" />
    </div>
  );
}
