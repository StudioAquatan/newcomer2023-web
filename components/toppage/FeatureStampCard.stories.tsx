import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Recommendation } from "../../api/@types";

import FeatureStampCard from "./FeatureStampCard";

export default {
  title: "toppage/Feature",
  component: FeatureStampCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FeatureStampCard>;

const Template: ComponentStory<typeof FeatureStampCard> = (args) => (
  <FeatureStampCard {...args} />
);

const orgIds = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const recommendation: Recommendation = {
  orgs: orgIds.map((org, index) => ({
    org: {
      id: org,
    },
    coefficient: 0,
    isVisited: true,
    isExcluded: false,
    stampSlot: index,
  })),
  ignoreRemains: 0,
  renewRemains: 0,
};

export const Diagnose = Template.bind({});
Diagnose.args = {
  title: "相性診断",
  description:
    "BINGOスタンプラリーのために相性診断をして自分に合った部・サークルの説明を聞きに行こう！",
  recommendation: recommendation,
  inverse: true,
};
