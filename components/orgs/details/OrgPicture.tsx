import { css } from "@emotion/react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { useDetailsProgress } from "../../../store/organizationDetails";

type Props = {
  url: string;
  isMovie: boolean;
  width: number;
  height: number;
  isActive: boolean;
};

const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const image = css`
  width: calc(min(100vw, 800px));
  max-width: 100vw;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
`;
// TODO: progress barが固定値で入っている(4px + 1rem)
const playButton = css`
  position: absolute;
  top: calc(50% - min(35vw, 250px) / 2 - 4px - 1rem);
  left: calc(50% - min(35vw, 250px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(35vw, 250px);
  height: min(35vw, 250px);
  font-size: min(30vw, 200px);
  color: rgb(255 255 255 / 50%);

  &:hover {
    color: rgb(255 255 255 / 80%);
  }
`;

export default function OrgPicture({
  url,
  isMovie,
  width,
  height,
  isActive,
}: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { set: setProgress } = useDetailsProgress();
  const [isPlaying, setIsPlaying] = React.useState(false);
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
    setIsPlaying(false);
  }, [isMovie, url]);

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play();

      const interval = setInterval(() => {
        const progress =
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          videoRef.current!.currentTime / videoRef.current!.duration;
        if (isNaN(progress)) return;
        setProgress(progress);
      }, 1000 / 30);
      return () => clearInterval(interval);
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [isActive, setProgress]);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  const handlePlayStart = () => setIsPlaying(true);

  return (
    <div css={container}>
      {isMovie ? (
        <>
          <video
            src={url}
            css={image}
            muted
            ref={videoRef}
            controls
            onPlay={handlePlayStart}
          />
          {isPlaying || (
            <a css={playButton} onClick={handlePlay}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          )}
        </>
      ) : (
        <Image
          src={url}
          alt=""
          css={image}
          width={700}
          height={(700 / width) * height}
        />
      )}
    </div>
  );
}
