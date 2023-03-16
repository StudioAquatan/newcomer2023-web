import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import JumpingLogoLoader from "./JumpingLogoLoader";

export default {
  title: "Loaders/JumpingLogoLoader",
  component: JumpingLogoLoader,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof JumpingLogoLoader>;

const Template: ComponentStory<typeof JumpingLogoLoader> = (args) => (
  <JumpingLogoLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "読み込み中...",
};
