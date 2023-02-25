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
  stamps: [
    {
      orgName: "Org 1",
      backgroundColor: "#00FF00",
      seed: 1,
    },
    {
      orgName: "Org 2",
      backgroundColor: "#FF0000",
      seed: 2,
    },
    {
      orgName: "Org 3",
      backgroundColor: "#00FF00",
      seed: 3,
    },
    {
      orgName: "Org 4",
      backgroundColor: "#FF0000",
      seed: 4,
    },
    {
      orgName: "Org 5",
      backgroundColor: "#00FF00",
      seed: 5,
    },
    {
      orgName: "Org 6",
      backgroundColor: "#FF0000",
      seed: 6,
    },
    {
      orgName: "Org 7",
      backgroundColor: "#00FF00",
      visited: true,
      seed: 7,
    },
    {
      orgName: "Org 8",
      backgroundColor: "#FF0000",
      visited: true,
      seed: 8,
    },
    {
      orgName: "Org 9",
      backgroundColor: "#00FF00",
      visited: true,
      seed: 9,
    },
  ],
};

const longOrg: StampCardProps = {
  stamps: [
    {
      orgName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      backgroundColor: "#00FF00",
      seed: 1,
    },
    {
      orgName: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      backgroundColor: "#FF0000",
      seed: 2,
    },
    {
      orgName: "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      backgroundColor: "#00FF00",
      seed: 3,
    },
    {
      orgName: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      backgroundColor: "#FF0000",
      seed: 4,
    },
    {
      orgName: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      backgroundColor: "#00FF00",
      seed: 5,
    },
    {
      orgName: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      backgroundColor: "#FF0000",
      seed: 6,
    },
    {
      orgName: "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      backgroundColor: "#00FF00",
      visited: true,
      seed: 7,
    },
    {
      orgName: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      backgroundColor: "#FF0000",
      visited: true,
      seed: 8,
    },
    {
      orgName: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      backgroundColor: "#00FF00",
      visited: true,
      seed: 9,
    },
  ],
};

export const Default = Template.bind({});
Default.args = card;

export const LongOrgName = Template.bind({});
LongOrgName.args = longOrg;
