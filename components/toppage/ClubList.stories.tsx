import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubList from "./ClubList";

export default {
  title: "toppage/ClubList",
  component: ClubList,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "#AAA" }],
    },
  },
} as ComponentMeta<typeof ClubList>;

const Template: ComponentStory<typeof ClubList> = () => <ClubList />;

export const Default = Template.bind({});
