import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import YesNoButton from "./YesNoButton";

export default {
  title: "Buttons/YesNoButton",
  component: YesNoButton,
} as ComponentMeta<typeof YesNoButton>;

const Template: ComponentStory<typeof YesNoButton> = (args) => (
  <YesNoButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  questionId: "0",
};
