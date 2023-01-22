import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubCard from "./ClubCard";

export default {
  title: "Clubs/ClubCard",
  component: ClubCard,
} as ComponentMeta<typeof ClubCard>;

const Template: ComponentStory<typeof ClubCard> = (args) => (
  <ClubCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  clubName: "StudioAquatan",
  description: "Make Aquatan Great Again",
};

export const LongClubName = Template.bind({});
LongClubName.args = {
  clubName: "ToooooooooooLongClubName",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
};
