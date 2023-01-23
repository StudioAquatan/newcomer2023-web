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

export const Diagnose = Template.bind({});
Diagnose.args = {
  title: "相性診断とは",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  featureImagePath: "/toppage/diagnose.png",
};

export const StampRally = Template.bind({});
StampRally.args = {
  title: "スタンプラリーとは",
  description: "QRコードを読み込んで、景品を貰いに行こう！",
  featureImagePath: "/toppage/stamp-rally.png",
  inverse: true,
};
