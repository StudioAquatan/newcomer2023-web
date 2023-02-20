import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Stamp from "./Stamp";

export default {
  title: "StampCard/Stamp",
  component: Stamp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Stamp>;

const Template: ComponentStory<typeof Stamp> = (args) => <Stamp {...args} />;

export const NotVisited = Template.bind({});
NotVisited.args = {
  clubName: "StudioAquatan",
  backgroundColor: "#0000FF",
  visited: false,
};

export const Visited = Template.bind({});
Visited.args = {
  clubName: "StudioAquatan",
  backgroundColor: "#0000FF",
  visited: true,
};
