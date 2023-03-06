import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import OrgDetailsText from "./OrgDetailsText";

export default {
  title: "Orgs/OrgDetailsText",
  component: OrgDetailsText,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrgDetailsText>;

const Template: ComponentStory<typeof OrgDetailsText> = (args) => (
  <OrgDetailsText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  org: {
    id: "0",
    fullName: "Studio Aquatan",
    shortName: "StudioAquatan",
    shortDescription: "あくあたん工房です",
    logo: {
      src: "/org_icons/studioaquatan.png",
      width: 150,
      height: 150,
    },
    description: "<p>Make Aquatan Great Again<br/>Make Aquatan Great Again</p>",
    location: "8-302",
    fees: "なし",
    activeDays: "LT会/部会 毎月最終金曜日 18:00~",
    links: ["https://twitter.com/StudioAquatan", "https://www.aquatan.studio/"],
  },
  type: "summary",
};
