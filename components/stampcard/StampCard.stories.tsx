import { ComponentStory, ComponentMeta } from "@storybook/react";
import { cloneDeep } from "lodash";
import React from "react";
import { Recommendation } from "../../api-client/@types";

import { recommendationGetSuccessResponseJson } from "../../mocks/api/recommendation";
import Card from "./StampCard";

export default {
  title: "StampCard/StampCard",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    stamps: { control: "object" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

function getStampCard(recommendation: Recommendation) {
  return {
    stamps: recommendation.orgs.map((item, index) => {
      return {
        recommendation: item,
        seed: 0 + index,
      };
    }),
  };
}

const { recommendation } = recommendationGetSuccessResponseJson;
const visitedRecommendation = cloneDeep(recommendation);

const visitedStamps = getStampCard(visitedRecommendation);

const notVisitedRecommendation = cloneDeep(recommendation);
notVisitedRecommendation.orgs = notVisitedRecommendation.orgs.map((item) => {
  item.isVisited = false;
  return {
    ...item,
  };
});

const notVisitedStamps = getStampCard(notVisitedRecommendation);

export const Visited = Template.bind({});
Visited.args = visitedStamps;

export const NotVisited = Template.bind({});
NotVisited.args = notVisitedStamps;
