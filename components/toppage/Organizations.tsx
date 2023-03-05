import { css } from "@emotion/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const base = css`
  margin-bottom: 4rem;
`;

const contentPStyle = css`
  margin: 0;
  font-size: calc(1.6rem + 1vw);
  color: #333;
  text-align: center;
  text-shadow: 1px 1px 1px #fff, -1px 1px 1px #fff, 1px -1px 1px #fff,
    -1px -1px 1px #fff;
`;

const logoStyle = css`
  width: auto;
  height: calc(2rem + 1vw);
  margin: 0 calc(0.4rem + 0.5vw);
  vertical-align: middle;
`;

const xmarkStyle = css`
  filter: drop-shadow(1px 1px 1px #fff) drop-shadow(-1px 1px 1px #fff)
    drop-shadow(1px -1px 1px #fff) drop-shadow(-1px -1px 1px #fff);
`;

export default function Organizations() {
  return (
    <div css={base}>
      <p css={contentPStyle}>新歓委員会 with</p>
      <p css={contentPStyle}>
        <Image
          src="/toppage/irodori.png"
          alt="irodori"
          css={logoStyle}
          width={64}
          height={64}
        />
        irodori <FontAwesomeIcon css={xmarkStyle} icon={faXmark} />
        <Image
          src="/toppage/studioaquatan.png"
          alt="あくあたん工房"
          css={logoStyle}
          width={64}
          height={64}
        />
        あくあたん工房{" "}
      </p>
    </div>
  );
}
