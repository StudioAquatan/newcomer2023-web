import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import FiveRadioButton from "./FiveRadioButton";

export default {
  title: "Buttons/FiveRadioButton",
  component: FiveRadioButton,
} as ComponentMeta<typeof FiveRadioButton>;

const Template: ComponentStory<typeof FiveRadioButton> = (args) => (
  <FiveRadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  questionId: "0",
};
