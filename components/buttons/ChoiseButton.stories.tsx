import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Question } from "../../api-client/@types";

import ChoiseButton from "./ChoiseButton";

export default {
  title: "Buttons/AnswerButton",
  component: ChoiseButton,
} as ComponentMeta<typeof ChoiseButton>;

const Template: ComponentStory<typeof ChoiseButton> = (args) => (
  <ChoiseButton {...args} />
);

const answers = [
  { id: 0, text: "選択肢1" },
  { id: 1, text: "選択肢2" },
  { id: 2, text: "選択肢3" },
  { id: 3, text: "選択肢4" },
  { id: 4, text: "選択肢5" },
];

const question: Question = {
  id: "0",
  questionText: "質問文",
  questionType: "choice",
  answers: answers,
};

export const Choise = Template.bind({});
Choise.args = {
  question: question,
};
