import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Question as QuestionType } from "../../api-client/@types";

import QuestionForm from "./QuestionForm";

export default {
  title: "Questions/QuestionForm",
  component: QuestionForm,
} as ComponentMeta<typeof QuestionForm>;

const Template: ComponentStory<typeof QuestionForm> = (args) => (
  <QuestionForm {...args} />
);

const questions: QuestionType[] = [
  {
    id: "0",
    questionText: "質問文 0",
    questionType: "five",
  },
  {
    id: "1",
    questionText: "質問文 1",
    questionType: "five",
  },
  {
    id: "2",
    questionText: "質問文 2",
    questionType: "five",
  },
  {
    id: "3",
    questionText: "質問文 3",
    questionType: "five",
  },
  {
    id: "4",
    questionText: "質問文 4",
    questionType: "five",
  },
  {
    id: "5",
    questionText: "質問文 5",
    questionType: "five",
  },
  {
    id: "6",
    questionText: "質問文 6",
    questionType: "five",
  },
  {
    id: "7",
    questionText: "質問文 7",
    questionType: "five",
  },
];

export const Default = Template.bind({});
Default.args = {
  questions: questions,
};
