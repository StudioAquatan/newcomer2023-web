import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Recommendation } from "../../api/@types";

import FeatureStampRally from "./FeatureStampRally";

export default {
  title: "toppage/Feature",
  component: FeatureStampRally,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FeatureStampRally>;

const Template: ComponentStory<typeof FeatureStampRally> = (args) => (
  <FeatureStampRally {...args} />
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

export const StampRally = Template.bind({});
StampRally.args = {
  title: "スタンプラリー",
  description: "QRコードを読み込んで、景品を貰いに行こう！",
  recommendation: recommendation,
  inverse: true,
};
