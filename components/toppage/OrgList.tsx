import { css, Theme, useTheme } from "@emotion/react";
import Link from "next/link";
import ColorBorderButton from "../buttons/ColorBorderButton";
// import GlowingPinkButton from "../buttons/GlowingPinkButton";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = (theme: Theme) => css`
  margin: 0;
  margin-bottom: 1.6rem;
  font-size: 4.8rem;
  font-weight: bold;
  color: ${theme.colors.normalTextColor};

  @media screen and (max-width: 1080px) {
    font-size: 4rem;
  }
`;

export default function OrgList() {
  const theme = useTheme();
  return (
    <div css={container}>
      <p css={title}>部活動一覧</p>
      <Link href="/orgs/">
        <ColorBorderButton
          label="こちら"
          textColor={theme.colors.button.enable.backgroundColor}
          borderColor={theme.colors.button.enable.backgroundColor}
          fontSize="2.4rem"
        />
      </Link>
    </div>
  );
}
