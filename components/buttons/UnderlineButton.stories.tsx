import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import UnderlineButton from "./UnderlineButton";

export default {
  title: "Buttons/UnderlineButton",
  component: UnderlineButton,
} as ComponentMeta<typeof UnderlineButton>;

const Template: ComponentStory<typeof UnderlineButton> = (args) => (
  <UnderlineButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "こちら",
};
