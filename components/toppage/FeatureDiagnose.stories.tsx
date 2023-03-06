import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Question } from "../../api-client/@types";

import FeatureDiagnose from "./FeatureDiagnose";

export default {
  title: "toppage/Feature",
  component: FeatureDiagnose,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FeatureDiagnose>;

const Template: ComponentStory<typeof FeatureDiagnose> = (args) => (
  <FeatureDiagnose {...args} />
);

const question: Question = {
  id: "1",
  questionText: "あなたの性別は？",
  questionType: "five",
};

export const Diagnose = Template.bind({});
Diagnose.args = {
  title: "相性診断",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  inverse: false,
  question: question,
};
