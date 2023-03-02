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

const diagnoseContent = (
  <img src="/toppage/diagnose.png" alt="相性診断" css={featureContentStyle} />
);

export const Diagnose = Template.bind({});
Diagnose.args = {
  title: "相性診断",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  featureContentNode: diagnoseContent,
};
