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
  border: 1px solid #aaa;
  border-radius: 1.6rem;
  backdrop-filter: blur(10px);
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
    <div css={container}>
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
    </div>
  );
}
