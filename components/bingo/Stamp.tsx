import { css } from "@emotion/react";

export type StampProps = {
  clubName: string;
  backgroundColor: string;
};

const stampStyle = (backgroundColor: string) => css`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
