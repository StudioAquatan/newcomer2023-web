import { css } from "@emotion/react";

export type ClubCardProps = {
  clubName: string;
  description: string;
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 290px;
  height: 70px;
  background: #353535;
  border-radius: 20px;
  transition: 0.5s ease-in-out;
  backdrop-filter: blur(10px);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const clubImageStyle = css`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  background: linear-gradient(#d7cfcf, #9198e5);
  border-radius: 10px;
`;

const textBoxStyle = css`
  width: calc(100% - 90px);
  margin-left: 10px;

  /* font-family: "Poppins" sans-serif; */
  color: white;
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
