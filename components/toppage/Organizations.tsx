import { css } from "@emotion/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import imgixLoader from "../../image-loader";
import { irodori, studioaquatan } from "../../styles/images";

const base = css`
  margin-bottom: 4rem;
`;

const contentPStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 1em;
  padding: 0 calc(0.4rem + 0.5vw);
  margin-left: calc(0.4rem + 0.5vw);
  filter: drop-shadow(1px 1px 1px #fff) drop-shadow(-1px 1px 1px #fff)
    drop-shadow(1px -1px 1px #fff) drop-shadow(-1px -1px 1px #fff);
`;

export default function Organizations() {
  return (
    <div css={base}>
      <p css={contentPStyle}>新歓委員会 with</p>
      <p css={contentPStyle}>
        <Image
          src={irodori}
          alt="irodori"
          css={logoStyle}
          width={64}
          height={64}
          loader={imgixLoader}
        />
        irodori <FontAwesomeIcon css={xmarkStyle} icon={faXmark} />
        <Image
          src={studioaquatan}
          alt="あくあたん工房"
          css={logoStyle}
          width={64}
          height={64}
          loader={imgixLoader}
        />
        あくあたん工房
      </p>
    </div>
  );
}
