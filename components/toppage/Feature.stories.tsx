import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Feature from "./Feature";

export default {
  title: "toppage/Feature",
  component: Feature,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => (
  <Feature {...args} />
);

const featureContentStyle = css`
  width: 100%;
`;

const stampRallyContent = (
  <img
    src="/toppage/stamp-rally.png"
    alt="スタンプラリー"
    css={featureContentStyle}
  />
);

export const StampRally = Template.bind({});
StampRally.args = {
  title: "スタンプラリー",
  description: "QRコードを読み込んで、景品を貰いに行こう！",
  featureContentNode: stampRallyContent,
  inverse: true,
};
