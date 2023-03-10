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

const onChange = (questionId: string, answerId: number) => {
  console.log(`questionId: ${questionId}, answerId: ${answerId}`);
};

export const YesNo = Template.bind({});
YesNo.args = {
  questionId: "0",
  onChange: onChange,
};
