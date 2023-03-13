import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Hamburger from "./Hamburger";

export default {
  title: "Buttons/Hamburger",
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => (
  <Hamburger {...args} />
);

const onClick = () => {
  console.log("clicked");
};

export const Default = Template.bind({});
Default.args = {
  onClick: onClick,
};
