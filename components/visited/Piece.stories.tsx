import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Piece from "./Piece";

export default {
  title: "Visited/Piece",
  component: Piece,
} as ComponentMeta<typeof Piece>;

const Template: ComponentStory<typeof Piece> = (args) => <Piece {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#ff0000",
  width: "100px",
  height: "100px",
};
