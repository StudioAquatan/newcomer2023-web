import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { OrganizationFull } from "../../../api-client/@types";

import OrgRow, { OrgRowProps } from "./OrgRow";

export default {
  title: "Orgs/Showcase/OrgRow",
  component: OrgRow,
  argTypes: {
    orgs: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrgRow>;

const Template: ComponentStory<typeof OrgRow> = (args) => <OrgRow {...args} />;

const studioaquatan: OrganizationFull = {
  id: "0",
  fullName: "StudioAquatan",
  shortName: "StudioAquatan",
  shortDescription: "Make Aquatan Great Again",
  description: "Make Aquatan Great Again",
};

const tooLongName = {
  id: "0",
  fullName: "ToooooooooooLongOrgName",
  shortName: "ToooooooooooLongOrgName",
  shortDescription:
    "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
  description: "TooooooooooooooooooooooooooooooooooooooooooooLongDescription",
};

const orgs = (inverse: boolean) => {
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

const longNameOrgs: OrgRowProps = {
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

const mixed: OrgRowProps = {
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
Default.args = orgs(false);

export const Inverse = Template.bind({});
Inverse.args = orgs(true);

export const LongOrgName = Template.bind({});
LongOrgName.args = longNameOrgs;

export const Mixed = Template.bind({});
Mixed.args = mixed;
