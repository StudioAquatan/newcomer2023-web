import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { questionsGetSuccessResponseJson } from "../../mocks/api/questions";

import QuestionForm from "./QuestionForm";

export default {
  title: "Questions/QuestionForm",
  component: QuestionForm,
} as ComponentMeta<typeof QuestionForm>;

const Template: ComponentStory<typeof QuestionForm> = (args) => (
  <QuestionForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  question: questionsGetSuccessResponseJson[0],
};
