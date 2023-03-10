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

const onChange = (questionId: string, answerId: number) => {
  console.log(`questionId: ${questionId}, answerId: ${answerId}`);
};

const questionFive: QuestionType = {
  id: "0",
  questionText: "質問文",
  questionType: "five",
};

const questionYesNo: QuestionType = {
  id: "1",
  questionText: "質問文",
  questionType: "yesno",
};

const questionChoice: QuestionType = {
  id: "2",
  questionText: "質問文",
  questionType: "choice",

  answers: [
    {
      id: 0,
      text: "選択肢1",
    },
    {
      id: 1,
      text: "選択肢2",
    },
    {
      id: 2,
      text: "選択肢3",
    },
  ],
};

export const Five = Template.bind({});
Five.args = {
  question: questionFive,
  onChange: onChange,
};

export const YesNo = Template.bind({});
YesNo.args = {
  question: questionYesNo,
  onChange: onChange,
};

export const Choice = Template.bind({});
Choice.args = {
  question: questionChoice,
  onChange: onChange,
};
