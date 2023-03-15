import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ColorBorderButton from "../buttons/ColorBorderButton";

type EntryButtonProps = {
  isMobile: boolean;
  hasStampCard: boolean;
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

const ActivateButton = ({ isMobile, hasStampCard }: EntryButtonProps) => {
  const theme = useTheme();

  if (isMobile) {
    if (hasStampCard) {
      return (
        <Link href="/stampcard">
          <ColorBorderButton
            label="スタンプカードを表示"
            textColor={theme.colors.button.enable.backgroundColor}
            borderColor={theme.colors.button.enable.backgroundColor}
          />
        </Link>
      );
    } else {
      return (
        <Link href="/diagnose">
          <ColorBorderButton
            label="診断する"
            textColor={theme.colors.button.enable.backgroundColor}
            borderColor={theme.colors.button.enable.backgroundColor}
          />
        </Link>
      );
    }
  } else {
    return (
      <>
        <ColorBorderButton label="診断する" disabled={true} />
        <p css={notice}>診断するにはスマートフォンからアクセスしてください。</p>
      </>
    );
  }
};

export default function EntryButton(props: EntryButtonProps) {
  return (
    <div css={container}>
      <ActivateButton {...props} />
    </div>
  );
}
