import { css } from "@emotion/react";

export type ClubCardProps = {
  clubName: string;
  clubImagePath?: string;
  description: string;
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1.6rem;
  overflow: hidden;
  background: transparent;
  border: 1px solid #aaa;
  border-radius: 1.6rem;
  backdrop-filter: blur(10px);

  &::before {
    position: absolute;
    top: 0;
    left: -50px;
    z-index: -1;
    width: 0;
    height: 100%;
    content: "";
    background-color: #dfeddc;
    transition: width 1000ms;
    transform: skewX(45deg);
  }

  &:hover::before {
    width: 250%;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const clubImageStyle = css`
  width: 4.8rem;
  height: 4.8rem;
  background-color: #eee;
  border-radius: 1.6rem;
`;

const textBoxStyle = css`
  width: 20.8rem;
  margin-left: 1.6rem;
`;

const textContentStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const textContentH1Style = css`
  margin: 0;
  overflow: hidden;
  font-size: 1.6rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const textContentPStyle = css`
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: lighter;
  text-align: left;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default function ClubCard({
  clubName,
  clubImagePath = "default.png",
  description,
}: ClubCardProps) {
  return (
    <button css={container}>
      <img
        data-item="clubImage"
        css={clubImageStyle}
        src={"/club_icons/" + clubImagePath}
        alt="Studio Aquatan"
      ></img>
      <div css={textBoxStyle}>
        <div css={textContentStyle}>
          <p css={textContentH1Style}>{clubName}</p>
        </div>
        <p css={textContentPStyle}>{description}</p>
      </div>
      <div></div>
    </button>
  );
}
