import { css } from "@emotion/react";

export type StampProps = {
  clubName: string;
  backgroundColor: string;
  visited?: boolean;
};

const stampStyle = (backgroundColor: string) => css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  display: -moz-box;
  display: -webkit-box;
  display: -o-box;
  display: -ms-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  -o-box-orient: vertical;
  -ms-box-orient: vertical;
  -webkit-line-clamp: 3;
  width: 100%;
  overflow: hidden;
  text-align: center;
  word-break: break-all;
`;

const markVisitedStyle = () => {
  const minRotate = -0.15;
  const maxRotate = 0.15;
  const rotate = Math.random() * (maxRotate - minRotate) + minRotate;
  const maxMove = "5%";

  return css`
    position: absolute;
    right: calc(${maxMove} * ${Math.random()});
    bottom: calc(${maxMove} * ${Math.random()});
    width: 30%;
    transform: rotate(${rotate}turn);
  `;
};

export default function Stamp({
  clubName,
  backgroundColor,
  visited = false,
}: StampProps) {
  return (
    <div css={[stampStyle(backgroundColor)]}>
      {visited ? (
        <img css={markVisitedStyle()} src="/mark_visited.png" alt="visited" />
      ) : (
        ""
      )}
      <div css={clubNameStyle}>{clubName}</div>
    </div>
  );
}
