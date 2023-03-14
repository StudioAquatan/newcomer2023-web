import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { orgsGetSuccessResponseJson } from "../../../mocks/api/orgs";
import { shuffle } from "../../random";
import OrgShowcase, { OrgShowcaseProps } from "./OrgShowcase";

export default {
  title: "Orgs/Showcase/OrgShowcase",
  component: OrgShowcase,
  argTypes: {
    orgs: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrgShowcase>;

const Template: ComponentStory<typeof OrgShowcase> = (args) => (
  <OrgShowcase {...args} />
);

const showcase: OrgShowcaseProps = {
  orgs: shuffle(orgsGetSuccessResponseJson, 0),
};

export const Default = Template.bind({});
Default.args = showcase;
