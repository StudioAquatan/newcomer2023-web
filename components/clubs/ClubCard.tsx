import { css } from "@emotion/react";

export type ClubCardProps = {
  clubName: string;
  description: string;
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem;
  border: 1px solid #aaa;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`;

const clubImageStyle = css`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(#d7cfcf, #9198e5);
  border-radius: 1rem;
`;

const textBoxStyle = css`
  width: 13rem;
  margin-left: 1rem;
`;

const textContentStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const textContentH1Style = css`
  margin: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const textContentPStyle = css`
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 12px;
  font-weight: lighter;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default function ClubCard({ clubName, description }: ClubCardProps) {
  return (
    <div css={container}>
      <img
        data-item="clubImage"
        css={clubImageStyle}
        src="/club_icons/studioaquatan.png"
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
