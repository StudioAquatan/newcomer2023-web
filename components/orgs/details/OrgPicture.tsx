import { css } from "@emotion/react";
import {
  faCirclePlay,
  faVolumeMute,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  useDetailsMuteValue,
  useDetailsProgress,
  useDetailsMute,
} from "../../../store/organizationDetails";

type Props = {
  url: string;
  isMovie: boolean;
  width: number;
  height: number;
  isActive: boolean;
};

const container = css`
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

const playButton = css`
  position: absolute;
  top: calc(50% - min(35vw, 250px) / 2);
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

const muteButton = css`
  position: absolute;
  right: 5vw;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: left;
  width: min(12vw, 80px);
  height: min(12vw, 80px);
  font-size: min(10vw, 60px);
  color: rgb(255 255 255 / 50%);

  &:hover {
    color: rgb(255 255 255 / 80%);
  }
`;

export function OrgMovieControl() {
  const muteState = useDetailsMute();
  return (
    <a css={muteButton} onClick={muteState.toggle}>
      <FontAwesomeIcon icon={muteState.isMute ? faVolumeMute : faVolumeDown} />
    </a>
  );
}

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
  const muted = useDetailsMuteValue();
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

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (!isActive) return;
    const handleTouchEnd = () => {
      videoRef.current?.play();
    };
    const handleTouchStart = () => {
      if (!videoRef.current?.paused) {
        window.addEventListener("touchend", handleTouchEnd);
      }
      videoRef.current?.pause();
    };

    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isActive]);

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
            muted={muted}
            ref={videoRef}
            onPlay={handlePlayStart}
          />
          {!isPlaying && isActive && (
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
