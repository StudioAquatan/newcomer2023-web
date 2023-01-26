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

const button = css`
  padding: 1.6rem 4rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  background-color: #ffc8df;
  border: 0;
  border-radius: 4.8rem;
  box-shadow: rgb(0 0 0 / 5%) 0 0 1rem;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 0.5rem;
    background-color: #fff;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 0.5rem 3rem 0;
  }

  &:active {
    letter-spacing: 0.5rem;
    background-color: #ffc8df;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 0 0 0;
    transition: 100ms;
    transform: translateY(1rem);
  }
`;

export default function ClubList() {
  return (
    <div css={container}>
      <p css={title}>部活動一覧</p>
      <button css={button}>こちら</button>
    </div>
  );
}
