import { css } from "@emotion/react";
import {
  faCirclePlay,
  faVolumeMute,
  faVolumeDown,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import imgixLoader from "../../../image-loader";
import {
  useDetailsMuteValue,
  useDetailsProgress,
  useDetailsMute,
  useDetailsPause,
} from "../../../store/organizationDetails";
import { useIsMobile } from "../../../store/userAgent";

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
  flex-direction: column;
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
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: rgb(255 255 255 / 80%);
  }
`;

const pauseButton = css`
  color: rgb(255 255 255 / 0%);
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
  cursor: pointer;

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
  children,
}: React.PropsWithChildren<Props>) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { set: setProgress } = useDetailsProgress();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isInitalPlayStarted, setInitialPlay] = React.useState(false);
  const muted = useDetailsMuteValue();
  const { isMobile } = useIsMobile();
  const { paused } = useDetailsPause();

  // URL変化でm3u8読み込む部分
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

  // 表示されたときに再生したり，消えたときに止める
  React.useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      setProgress(0);

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
      setInitialPlay(false);
    }
  }, [isActive, setProgress]);

  React.useEffect(() => {
    if (!isActive) return;

    if (paused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [isActive, paused]);

  React.useEffect(() => {
    if (!isActive) return;

    if (videoRef.current) videoRef.current.muted = muted;
  }, [isActive, muted]);

  const handlePlay = () => {
    videoRef.current?.play();
  };
  const handlePause = () => {
    videoRef.current?.pause();
  };
  const handlePlayStart = () => {
    setIsPlaying(true);
    setInitialPlay(true);
  };
  const handlePaused = () => setIsPlaying(false);

  return (
    <div css={container}>
      {isMovie ? (
        <>
          <video
            src={url}
            css={image}
            ref={videoRef}
            onPlay={handlePlayStart}
            onPause={handlePaused}
          />
          {isMobile && !isInitalPlayStarted && (
            <a css={playButton} onClick={handlePlay}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          )}
          {!isMobile && (
            <a
              css={isPlaying ? [playButton, pauseButton] : playButton}
              onClick={isPlaying ? handlePause : handlePlay}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faCirclePause : faCirclePlay}
              />
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
          loader={imgixLoader}
        />
      )}
      {children}
    </div>
  );
}
