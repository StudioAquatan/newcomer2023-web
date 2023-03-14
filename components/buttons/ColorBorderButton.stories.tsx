import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ColorBorderButton from "./ColorBorderButton";

export default {
  title: "Buttons/ColorBorderButton",
  component: ColorBorderButton,
} as ComponentMeta<typeof ColorBorderButton>;

const Template: ComponentStory<typeof ColorBorderButton> = (args) => (
  <ColorBorderButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "団体一覧を見る",
  color: "#FFC8DF",
  fontSize: "2.4rem",
};
