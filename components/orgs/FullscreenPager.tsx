import { css } from "@emotion/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pager = css`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: min(26vw, 200px);
  height: 100%;
  padding: 0 min(2vw, 20px);
  user-select: none;

  &:hover > a {
    background: rgb(255 255 255 / 20%);
  }
`;

const leftPager = css`
  left: 0;
  justify-content: left;
`;

const rightPager = css`
  right: 0;
  justify-content: right;
`;

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9em;
  height: 9em;
  background: rgb(255 255 255 / 10%);
  border-radius: 6em;

  @media (max-width: 420px) {
    display: none;
  }
`;

function LeftIcon() {
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      color="rgb(255 255 255 / 70%)"
      size="6x"
    />
  );
}

function RightIcon() {
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      color="rgb(255 255 255 / 70%)"
      size="6x"
    />
  );
}

type Props = {
  type: "left" | "right";
  onClick?: () => unknown;
};

export default function FullscreenPager({ type, onClick }: Props) {
  const containerCss =
    type === "left"
      ? [pager, leftPager]
      : type === "right"
      ? [pager, rightPager]
      : null;
  return (
    <div css={containerCss} onClick={onClick}>
      <a css={button}>
        {type === "left" && <LeftIcon />}
        {type === "right" && <RightIcon />}
      </a>
    </div>
  );
}
