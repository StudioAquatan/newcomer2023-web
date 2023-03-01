import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";

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
  min-width: calc(min(100vw, 400px));
  max-width: 100vw;
  height: auto;
  max-height: 90vh;
`;

export default function OrgPicture({ url, isMovie, width, height }: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (!isMovie || !videoRef.current) return;
    if (!videoRef.current.canPlayType("application/vnd.apple.mpegURL")) {
      const startWithHls = async () => {
        const Hls = await import("hls.js");
        const player = new Hls.default();
        player.startLevel = -1;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        player.attachMedia(videoRef.current!);
        player.loadSource(url);
      };
      startWithHls();
    }
  }, [isMovie, url]);
  return (
    <div css={container}>
      {isMovie ? (
        <video src={url} css={image} autoPlay muted ref={videoRef} />
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
