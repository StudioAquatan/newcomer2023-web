import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ColorBorderButton from "../buttons/ColorBorderButton";

type EntryButtonProps = {
  isMobile: boolean;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const notice = css`
  padding: 0;
  padding: 0 3.2rem;
  margin: 0;
  margin-top: 1.6rem;
  font-family: GenShinGothic-P, sans-serif;
  font-size: 1.6rem;
  text-align: center;
`;

const ActivateButton = ({ isMobile }: { isMobile: boolean }) => {
  const theme = useTheme();
  if (isMobile) {
    return (
      <Link href="/diagnose">
        <ColorBorderButton
          label="診断する"
          textColor={theme.colors.button.enable.backgroundColor}
          borderColor={theme.colors.button.enable.backgroundColor}
        />
      </Link>
    );
  } else {
    return (
      <>
        <ColorBorderButton label="診断する" disabled={true} />
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
