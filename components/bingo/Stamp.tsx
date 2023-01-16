import { css } from "@emotion/react";

export type StampProps = {
  clubName: string;
  backgroundColor: string;
};

const stampStyle = (backgroundColor: string) => css`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: center;
  word-break: break-all;
`;

export default function Stamp({ clubName, backgroundColor }: StampProps) {
  return (
    <div css={[stampStyle(backgroundColor)]}>
      <div css={clubNameStyle}>{clubName}</div>
    </div>
  );
}
