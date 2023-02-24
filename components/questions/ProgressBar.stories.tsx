import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ProgressBar from "./ProgressBar";

export default {
  title: "Questions/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: "range", min: 0, max: 1.0, step: 0.01 } },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 0,
};
