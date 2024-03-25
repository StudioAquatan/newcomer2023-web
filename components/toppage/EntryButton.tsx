import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ColorBorderButton from "../buttons/ColorBorderButton";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ActivateButton = () => {
  const theme = useTheme();

  return (
    <Link href="/orgs">
      <ColorBorderButton
        label="団体一覧を見る"
        textColor={theme.colors.button.enable.backgroundColor}
        borderColor={theme.colors.button.enable.backgroundColor}
      />
    </Link>
  );
};

export default function EntryButton() {
  return (
    <div css={container}>
      <ActivateButton />
      <p css={notice}>イベントは終了しました！</p>
    </div>
  );
}
