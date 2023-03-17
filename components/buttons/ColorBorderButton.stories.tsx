import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { sakura } from "../../themes/sakura";

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
  textColor: sakura.colors.button.enable.backgroundColor,
  borderColor: sakura.colors.button.enable.backgroundColor,
  fontSize: "2.4rem",
};
