import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Question as QuestionType } from "../../api-client/@types";

import OneQuestion from "./OneQuestion";

export default {
  title: "Questions/OneQuestion",
  component: OneQuestion,
} as ComponentMeta<typeof OneQuestion>;

const Template: ComponentStory<typeof OneQuestion> = (args) => (
  <OneQuestion {...args} />
);

const question: QuestionType = {
  id: "0",
  questionText: "質問文",
  questionType: "five",
};

export const Default = Template.bind({});
Default.args = {
  question: question,
};
