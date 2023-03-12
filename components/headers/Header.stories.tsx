import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Header from "./Header";

export default {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
