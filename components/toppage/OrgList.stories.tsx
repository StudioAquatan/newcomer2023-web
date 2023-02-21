import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import OrgList from "./OrgList";

export default {
  title: "toppage/OrgList",
  component: OrgList,
} as ComponentMeta<typeof OrgList>;

const Template: ComponentStory<typeof OrgList> = () => <OrgList />;

export const Default = Template.bind({});
