import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ProgressBar from "./ProgressBar";

export default {
  title: "Questions/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  total: 10,
  passed: 5,
};
