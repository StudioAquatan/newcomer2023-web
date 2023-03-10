import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import OrgCard from "./OrgCard";

export default {
  title: "Orgs/Showcase/OrgCard",
  component: OrgCard,
} as ComponentMeta<typeof OrgCard>;

const Template: ComponentStory<typeof OrgCard> = (args) => (
  <OrgCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "0",
  fullName: "Default Org Name",
  shortName: "Default Org Name",
  shortDescription: "Default Description",
  description: "Default Description",
};

export const StudioAquatan = Template.bind({});
StudioAquatan.args = {
  id: "0",
  fullName: "StudioAquatan",
  shortName: "StudioAquatan",
  shortDescription: "Make Aquatan Great Again",
  description: "Make Aquatan Great Again",
  logo: {
    src: "/org_icons/studioaquatan.png",
    width: 500,
    height: 500,
  },
};

export const LongOrgName = Template.bind({});
LongOrgName.args = {
  id: "0",
  fullName: "ToooooooooooLongOrgName",
  shortName: "ToooooooooooLongOrgName",
  shortDescription:
    "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
};
