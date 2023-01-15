import { css } from "@emotion/react";

type StampProps = {
  clubName: string;
  backgroundColor: string;
};

const stampStyle = (backgroundColor: string) => css`
  position: absolute;
  width: 120px;
  height: 120px;
  background: ${backgroundColor};
`;

const clubNameStyle = css`
  position: absolute;
  top: 5%;
  right: 5%;
  bottom: 5%;
  left: 5%;
  align-items: center;

  /* font-family: "Noto Sans JP"; */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
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
