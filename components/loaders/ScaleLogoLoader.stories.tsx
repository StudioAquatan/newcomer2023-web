import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ScaleLogoLoader from "./ScaleLogoLoader";

export default {
  title: "Loaders/ScaleLogoLoader",
  component: ScaleLogoLoader,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ScaleLogoLoader>;

const Template: ComponentStory<typeof ScaleLogoLoader> = (args) => (
  <ScaleLogoLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "読み込み中...",
};
