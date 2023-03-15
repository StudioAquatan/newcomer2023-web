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

const questions: Question[] = [
  {
    id: "1",
    questionText: "あなたの性別は？",
    questionType: "five",
  },
  {
    id: "2",
    questionText: "あなたの好きな食べ物は？",
    questionType: "five",
  },
];

export const Diagnose = Template.bind({});
Diagnose.args = {
  title: "相性診断",
  description: (
    <>
      スタンプラリーのために
      <wbr />
      相性診断をして自分に
      <wbr />
      合った部・サークルの
      <wbr />
      説明を聞きに行こう！
    </>
  ),
  inverse: false,
  questions: questions,
};
