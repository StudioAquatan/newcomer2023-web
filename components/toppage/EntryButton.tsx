import { css } from "@emotion/react";
import GlowingPinkButton from "../buttons/GlowingPinkButton";

type EntryButtonProps = {
  isMobile: boolean;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const button = css`
  padding: 1.6rem 4rem;
  font-size: 2.5rem;
  text-decoration: none;
  background-color: #aaa;
  border: 0;
  border-radius: 4.8rem;
  box-shadow: rgb(0 0 0 / 5%) 0 0 1rem;
`;

const notice = css`
  padding: 0;
  margin: 0;
  margin-top: 1.6rem;
  font-size: 1.6rem;
`;

const ActivateButton = ({ isMobile }: { isMobile: boolean }) => {
  if (isMobile) {
    return <GlowingPinkButton text="診断する" href="" />;
  } else {
    return (
      <>
        <button css={button}>診断する</button>
        <p css={notice}>診断するにはスマートフォンからアクセスしてください。</p>
      </>
    );
  }
};

export default function EntryButton({ isMobile }: EntryButtonProps) {
  return (
    <div css={container}>
      <ActivateButton isMobile={isMobile} />
    </div>
  );
}
