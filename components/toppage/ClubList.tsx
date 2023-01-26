import { css } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = css`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
`;

const button = css`
  padding: 17px 40px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: #ffc8df;
  border: 0;
  border-radius: 50px;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 3px;
    background-color: #fff;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 7px 29px 0;
  }

  &:active {
    letter-spacing: 3px;
    background-color: #ffc8df;

    /* color: #ffc8df; */
    box-shadow: #ffc8df 0 0 0 0;
    transition: 100ms;
    transform: translateY(10px);
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
