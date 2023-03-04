import { css, Theme } from "@emotion/react";
import Link from "next/link";

export type OrgCardProps = {
  orgName: string;
  orgImagePath?: string;
  description: string;
  link: string;
};

const buttonStyle = css`
  padding: 0;
  margin: 0;
  font-family: GenJyuuGothic-P, sans-serif;
  cursor: pointer;
  background: transparent;
  border: 0;
`;

const container = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1.6rem;
  margin: 0.8rem;
  overflow: hidden;
  text-decoration: none;
  background-color: ${theme.colors.orgCard.backgroundColor};
  filter: drop-shadow(0 2px 2px rgb(0 0 0 / 50%));
  border: 1px solid ${theme.colors.orgCard.borderColor};
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
    background-color: ${theme.colors.orgCard.hover.backgroundColor};
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

const orgImageStyle = css`
  width: 4.8rem;
  height: 4.8rem;
  background-color: #eee;
  border-radius: 1.6rem;
  object-fit: contain;
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

const textContentH1Style = (theme: Theme) => css`
  margin: 0;
  overflow: hidden;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${theme.colors.orgCard.normalTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const textContentPStyle = (theme: Theme) => css`
  display: -webkit-box;

  /* 2行分で高さを固定にしてしまう */
  height: 3.6rem;
  margin: 0;
  overflow: hidden;
  font-family: GenShinGothicP, sans-serif;
  font-size: 1.2rem;
  color: ${theme.colors.orgCard.normalTextColor};
  text-align: left;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default function OrgCard({
  orgName,
  orgImagePath = "/org_icons/default.png",
  description,
  link,
}: OrgCardProps) {
  return (
    <Link href={link}>
      <button css={buttonStyle}>
        <div css={container}>
          <img
            css={orgImageStyle}
            src={orgImagePath}
            alt="Studio Aquatan"
          ></img>
          <div css={textBoxStyle}>
            <div css={textContentStyle}>
              <p css={textContentH1Style}>{orgName}</p>
            </div>
            <p css={textContentPStyle}>{description}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
