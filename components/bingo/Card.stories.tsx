import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Card from "./Card";
import { CardProps } from "./Card";

export default {
  title: "Bingo/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    stamps: { control: "object" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const card: CardProps = {
  stamps: [
    {
      clubName: "Club 1",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 2",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 3",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 4",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 5",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 6",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 7",
      backgroundColor: "#00FF00",
      visited: true,
    },
    {
      clubName: "Club 8",
      backgroundColor: "#FF0000",
      visited: true,
    },
    {
      clubName: "Club 9",
      backgroundColor: "#00FF00",
      visited: true,
    },
  ],
};

const longClub: CardProps = {
  stamps: [
    {
      clubName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      backgroundColor: "#00FF00",
      visited: true,
    },
    {
      clubName: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      backgroundColor: "#FF0000",
      visited: true,
    },
    {
      clubName: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      backgroundColor: "#00FF00",
      visited: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = card;

export const LongClubName = Template.bind({});
LongClubName.args = longClub;
