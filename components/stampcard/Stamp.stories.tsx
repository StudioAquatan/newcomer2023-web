import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { OrganizationFull, OrganizationSimple } from "../../api-client/@types";

import Stamp from "./Stamp";

export default {
  title: "StampCard/Stamp",
  component: Stamp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Stamp>;

const Template: ComponentStory<typeof Stamp> = (args) => <Stamp {...args} />;

const organizationSimple: OrganizationSimple = {
  id: "1",
};

const organiationFull: OrganizationFull = {
  id: "1",
  fullName: "StudioAquatan",
  shortName: "StudioAquatan",
  shortDescription: "Make Aquatan Great Again",
  logo: {
    src: "/org_icons/default.png",
    width: 100,
    height: 100,
  },
  stampBackground: {
    src: "/org_icons/default.png",
    width: 100,
    height: 100,
  },
  stampColor: "#0000FF",
  altLogo: "💧",
  description: "Make Aquatan Great Again",
};

export const NotVisited = Template.bind({});
NotVisited.args = {
  recommendation: {
    org: organizationSimple,
    coefficient: 1,
    isVisited: false,
    isExcluded: false,
    stampSlot: 0,
  },
  orgInfo: organiationFull,
  seed: 0,
};

export const Visited = Template.bind({});
Visited.args = {
  recommendation: {
    org: organizationSimple,
    coefficient: 1,
    isVisited: true,
    isExcluded: false,
    stampSlot: 0,
  },
  orgInfo: organiationFull,
  seed: 0,
};
