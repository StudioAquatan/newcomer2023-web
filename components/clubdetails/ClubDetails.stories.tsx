import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubDetails from "./ClubDetails";

export default {
  title: "ClubDetails/ClubDetails",
  component: ClubDetails,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ClubDetails>;

const Template: ComponentStory<typeof ClubDetails> = (args) => (
  <ClubDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  club: {
    id: "0",
    fullName: "Studio Aquatan",
    shortName: "StudioAquatan",
    shortDescription: "あくあたん工房です",
    logo: {
      src: "/club_icons/studioaquatan.png",
      width: 150,
      height: 150,
    },
    description: "Make Aquatan Great Again",
    location: "8-302",
    fees: "なし",
    activeDays: "LT会/部会 毎月最終金曜日 18:00~",
    links: ["https://twitter.com/StudioAquatan", "https://www.aquatan.studio/"],
  },
};
