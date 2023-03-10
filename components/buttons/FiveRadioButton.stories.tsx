import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import FiveRadioButton from "./FiveRadioButton";

export default {
  title: "Buttons/AnswerButton",
  component: FiveRadioButton,
} as ComponentMeta<typeof FiveRadioButton>;

const Template: ComponentStory<typeof FiveRadioButton> = (args) => (
  <FiveRadioButton {...args} />
);

const onChange = (questionId: string, answerId: number) => {
  console.log(`questionId: ${questionId}, answerId: ${answerId}`);
};

export const Five = Template.bind({});
Five.args = {
  questionId: "0",
  onChange: onChange,
};
