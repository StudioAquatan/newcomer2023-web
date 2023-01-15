import { css } from "@emotion/react";

type StampProps = {
  clubName: string;
  backgroundColor: string;
};

const stampStyle = (backgroundColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #fcfcfc;
  text-align: center;
  word-break: break-all;
`;

export default function Stamp({ clubName, backgroundColor }: StampProps) {
  return (
    <div>
      <div css={[stampStyle(backgroundColor)]}>
        <div css={clubNameStyle}>{clubName}</div>
      </div>
    </div>
  );
}
