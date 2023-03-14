import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import YesNoButton from "./YesNoButton";

export default {
  title: "Buttons/AnswerButton",
  component: YesNoButton,
} as ComponentMeta<typeof YesNoButton>;

const Template: ComponentStory<typeof YesNoButton> = (args) => (
  <YesNoButton {...args} />
);

export const YesNo = Template.bind({});
