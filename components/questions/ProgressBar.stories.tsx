import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Question } from "../../api/@types";

import ProgressBar from "./ProgressBar";

export default {
  title: "Questions/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

const questions: Array<Question> = [
  {
    id: "1",
    questionText: "Question 1",
    questionType: "five",
  },
  {
    id: "2",
    questionText: "Question 2",
    questionType: "five",
  },
  {
    id: "3",
    questionText: "Question 3",
    questionType: "five",
  },
  {
    id: "4",
    questionText: "Question 4",
    questionType: "five",
  },
  {
    id: "5",
    questionText: "Question 5",
    questionType: "five",
  },
  {
    id: "6",
    questionText: "Question 6",
    questionType: "five",
  },
  {
    id: "7",
    questionText: "Question 7",
    questionType: "five",
  },
  {
    id: "8",
    questionText: "Question 8",
    questionType: "five",
  },
];

export const Default = Template.bind({});
Default.args = {
  questions: questions,
  current: 0,
};
