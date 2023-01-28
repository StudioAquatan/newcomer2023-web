import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import GlowingPinkButton from "./GlowingPinkButton";

export default {
  title: "Buttons/GlowingPinkButton",
  component: GlowingPinkButton,
} as ComponentMeta<typeof GlowingPinkButton>;

const Template: ComponentStory<typeof GlowingPinkButton> = (args) => (
  <GlowingPinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "こちら",
  href: "/",
  query: {
    path: "/story/buttons-glowingpinkbutton--default",
  },
};
