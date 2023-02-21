import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Card from "./StampCard";
import { StampCardProps } from "./StampCard";

export default {
  title: "StampCard/StampCard",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    stamps: { control: "object" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const card: StampCardProps = {
  userId: 0,
  stamps: [
    {
      orgName: "Org 1",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "Org 2",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "Org 3",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "Org 4",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "Org 5",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "Org 6",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "Org 7",
      backgroundColor: "#00FF00",
      visited: true,
    },
    {
      orgName: "Org 8",
      backgroundColor: "#FF0000",
      visited: true,
    },
    {
      orgName: "Org 9",
      backgroundColor: "#00FF00",
      visited: true,
    },
  ],
};

const longOrg: StampCardProps = {
  userId: 0,
  stamps: [
    {
      orgName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      backgroundColor: "#00FF00",
    },
    {
      orgName: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      backgroundColor: "#FF0000",
    },
    {
      orgName: "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      backgroundColor: "#00FF00",
      visited: true,
    },
    {
      orgName: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      backgroundColor: "#FF0000",
      visited: true,
    },
    {
      orgName: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      backgroundColor: "#00FF00",
      visited: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = card;

export const LongOrgName = Template.bind({});
LongOrgName.args = longOrg;
