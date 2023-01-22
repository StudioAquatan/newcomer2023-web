import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubShowcase, { ClubShowcaseProps } from "./ClubShowcase";

export default {
  title: "Clubs/ClubShowcase",
  component: ClubShowcase,
  argTypes: {
    cards: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ClubShowcase>;

const Template: ComponentStory<typeof ClubShowcase> = (args) => (
  <ClubShowcase {...args} />
);

const studioaquatan = {
  clubName: "StudioAquatan",
  description: "Make Aquatan Great Again",
};

const tooLongName = {
  clubName: "ToooooooooooLongClubName",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
};

const cards = (inverse: boolean) => {
  return {
    cards: [
      studioaquatan,
      studioaquatan,
      studioaquatan,
      studioaquatan,
      studioaquatan,
      studioaquatan,
      studioaquatan,
      studioaquatan,
    ],
    inverse: inverse,
  };
};

const longNameClubs: ClubShowcaseProps = {
  cards: [
    tooLongName,
    tooLongName,
    tooLongName,
    tooLongName,
    tooLongName,
    tooLongName,
    tooLongName,
    tooLongName,
  ],
  inverse: false,
};

const mixed: ClubShowcaseProps = {
  cards: [
    tooLongName,
    studioaquatan,
    tooLongName,
    studioaquatan,
    tooLongName,
    studioaquatan,
    tooLongName,
    studioaquatan,
  ],
  inverse: false,
};

export const Default = Template.bind({});
Default.args = cards(false);

export const Inverse = Template.bind({});
Inverse.args = cards(true);

export const LongClubName = Template.bind({});
LongClubName.args = longNameClubs;

export const Mixed = Template.bind({});
Mixed.args = mixed;
