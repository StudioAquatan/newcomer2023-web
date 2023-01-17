import { css } from "@emotion/react";

export type StampProps = {
  clubName: string;
  backgroundColor: string;
  visited: boolean;
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

const markVisitedStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
`;

export default function Stamp({
  clubName,
  backgroundColor,
  visited,
}: StampProps) {
  return (
    <div css={[stampStyle(backgroundColor)]}>
      {visited ? (
        <img css={markVisitedStyle} src="/mark_visited.png" alt="visited" />
      ) : (
        ""
      )}
      <div css={clubNameStyle}>{clubName}</div>
    </div>
  );
}
