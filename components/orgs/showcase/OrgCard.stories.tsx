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
  orgName: "Default Org Name",
  orgImagePath: "/org_icons/default.png",
  description: "Default Description",
  link: "/",
};

export const StudioAquatan = Template.bind({});
StudioAquatan.args = {
  orgName: "StudioAquatan",
  orgImagePath: "/org_icons/studioaquatan.png",
  description: "Make Aquatan Great Again",
  link: "/",
};

export const LongOrgName = Template.bind({});
LongOrgName.args = {
  orgName: "ToooooooooooLongOrgName",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
  link: "/",
};
