import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  url: string;
  isMovie: boolean;
  width: number;
  height: number;
};

const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const image = css`
  width: auto;
  max-width: 100vw;
  height: auto;
  max-height: 90vh;
`;

export default function OrgPicture({ url, isMovie, width, height }: Props) {
  return (
    <div css={container}>
      {isMovie ? (
        <video src={url} css={image} autoPlay />
      ) : (
        <Image
          src={url}
          alt=""
          css={image}
          width={500}
          height={(500 / width) * height}
        />
      )}
    </div>
  );
}
