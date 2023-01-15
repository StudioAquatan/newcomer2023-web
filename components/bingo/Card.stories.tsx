import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Card from "./Card";

export default {
  title: "Bingo/Card",
  component: Card,
  argTypes: {
    clubNames: { control: "object" },
    backgroundColors: { control: "object" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const clubNames = () => {
  const clubs = [];
  for (let i = 0; i < 9; i++) {
    clubs.push("Club " + i);
  }
  return clubs;
};

const backgroundColors = [
  "#00FF00",
  "#FF0000",
  "#00FF00",
  "#FF0000",
  "#00FF00",
  "#FF0000",
  "#00FF00",
  "#FF0000",
  "#00FF00",
];

export const Primary = Template.bind({});
Primary.args = {
  clubNames: clubNames(),
  backgroundColors: backgroundColors,
};
