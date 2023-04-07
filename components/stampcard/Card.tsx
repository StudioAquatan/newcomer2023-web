import { css } from "@emotion/react";
import Stamp from "./Stamp";
import { StampProps } from "./Stamp";

export type StampCardSizeProps = {
  maxWidth: string;
  maxHeight: string;
};

export type StampCardProps = {
  stamps: StampProps[];
  size?: StampCardSizeProps;
};

const container = (size: StampCardSizeProps) => {
  const contentMaxWidth = size.maxWidth;
  const contentMaxHeight = size.maxHeight;
  const gutter = "10px";
  return css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(
      (min(${contentMaxWidth}, ${contentMaxHeight}) - ${gutter} * 2) / 3
    );
    grid-gap: ${gutter};
    width: 100%;
    max-width: min(${contentMaxWidth}, ${contentMaxHeight});
  `;
};

export default function Card({ stamps, size }: StampCardProps) {
  size ??= { maxWidth: "90vw", maxHeight: "65vh" };

  return (
    <div css={container(size)}>
      {stamps.map((stamp, index) => {
        return <Stamp key={index} {...stamp} />;
      })}
    </div>
  );
}
