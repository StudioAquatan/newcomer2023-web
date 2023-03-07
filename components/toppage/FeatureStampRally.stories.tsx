import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Recommendation } from "../../api-client/@types";
import { orgsGetSuccessResponseJson } from "../../mocks/api/orgs";

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

const recommendation: Recommendation = {
  orgs: orgsGetSuccessResponseJson.slice(0, 9).map((org, index) => ({
    org: {
      id: org.id,
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
  orgs: orgsGetSuccessResponseJson,
  inverse: true,
};
