import { css } from "@emotion/react";
import Image from "next/image";
import imgixLoader from "../../image-loader";

type VisitedCardProps = {
  fullName: string;
  logo: string;
  logoFocus?: boolean;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 600px;
  height: 60vh;
  padding: 3.2rem;
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);

  h1 {
    margin: 0;
    font-size: 3.8rem;
    font-weight: bold;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

const orgInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    padding: 0;
    margin: 0;
    margin-top: 1.8rem;
    margin-bottom: 0.4rem;
    font-size: 3.2rem;
    font-weight: normal;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  p {
    padding: 0;
    margin: 0;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 2rem;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

const logoContainer = (logoFocus: boolean) => css`
  position: relative;
  width: 40%;
  padding-bottom: 40%;
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: ${logoFocus ? "contain" : "cover"};
    border-radius: 10px;
  }
`;

const description = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-family: GenShinGothic-P, sans-serif;
    font-size: 2rem;
    text-align: center;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

export default function VisitedCard({
  fullName,
  logo,
  logoFocus = false,
}: VisitedCardProps) {
  return (
    <div css={container}>
      <h1>
        スタンプ
        <wbr />
        獲得！
      </h1>
      <div css={orgInfo}>
        <div css={logoContainer(logoFocus)}>
          <Image
            src={logo}
            alt={fullName}
            width={300}
            height={300}
            loader={imgixLoader}
          />
        </div>
        <h2>{fullName}</h2>
        <p>
          の説明会に
          <wbr />
          参加しました
        </p>
      </div>
      <div css={description}>
        <p>
          9個中3個目の
          <wbr />
          スタンプを獲得！
        </p>
      </div>
    </div>
  );
}
