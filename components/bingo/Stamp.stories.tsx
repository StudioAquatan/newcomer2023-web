import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stamp from "./Stamp";

export default {
  title: "Bingo/Stamp",
  component: Stamp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Stamp>;

const Template: ComponentStory<typeof Stamp> = (args) => <Stamp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  clubName: "StudioAquatan",
};
