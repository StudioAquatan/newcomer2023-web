import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubList from "./ClubList";

export default {
  title: "toppage/ClubList",
  component: ClubList,
} as ComponentMeta<typeof ClubList>;

const Template: ComponentStory<typeof ClubList> = () => <ClubList />;

export const Default = Template.bind({});
