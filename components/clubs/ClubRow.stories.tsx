import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubRow, { ClubRowProps } from "./ClubRow";

export default {
  title: "Clubs/ClubRow",
  component: ClubRow,
  argTypes: {
    cards: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ClubRow>;

const Template: ComponentStory<typeof ClubRow> = (args) => (
  <ClubRow {...args} />
);

const studioaquatan = {
  clubName: "StudioAquatan",
  description: "Make Aquatan Great Again",
  link: "/",
};

const tooLongName = {
  clubName: "ToooooooooooLongClubName",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
  link: "/",
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
  inverse: false,
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

export const Default = Template.bind({});
Default.args = cards(false);

export const Inverse = Template.bind({});
Inverse.args = cards(true);

export const LongClubName = Template.bind({});
LongClubName.args = longNameClubs;

export const Mixed = Template.bind({});
Mixed.args = mixed;
