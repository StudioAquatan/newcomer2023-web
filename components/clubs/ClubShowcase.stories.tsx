import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ClubRowProps } from "./ClubRow";
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

const cards: ClubRowProps = {
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
  inverse: false,
};

const longNameClubs: ClubRowProps = {
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
  inverse: true,
};

const mixed: ClubRowProps = {
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

const showcase: ClubShowcaseProps = {
  rows: [cards, longNameClubs, mixed],
};

export const Default = Template.bind({});
Default.args = showcase;
