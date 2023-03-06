import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryLikeContainer from "./StoryLikeContainer";

export default {
  title: "Orgs/StoryLikeContainer",
  component: StoryLikeContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StoryLikeContainer>;

const Template: ComponentStory<typeof StoryLikeContainer> = (args) => (
  <StoryLikeContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <p>Test</p>,
};
