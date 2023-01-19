import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubCard from "./ClubCard";

export default {
  title: "Clubs/ClubCard",
  component: ClubCard,
  argTypes: {},
} as ComponentMeta<typeof ClubCard>;

const Template: ComponentStory<typeof ClubCard> = (args) => (
  <ClubCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  clubName: "StudioAquatan",
  description: "Make Aquatan Great Again",
};
