import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import EntryButton from "./EntryButton";

export default {
  title: "toppage/EntryButton",
  component: EntryButton,
} as ComponentMeta<typeof EntryButton>;

const Template: ComponentStory<typeof EntryButton> = (args) => (
  <EntryButton {...args} />
);

export const Desktop = Template.bind({});
Desktop.args = {
  isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
  isMobile: true,
};
