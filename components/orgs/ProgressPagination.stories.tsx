import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ProgressPagination from "./ProgressPagination";

export default {
  title: "Orgs/ProgressPagination",
  component: ProgressPagination,
  argTypes: {
    pageProgress: { control: { type: "range", min: 0, max: 1.0, step: 0.01 } },
  },
} as ComponentMeta<typeof ProgressPagination>;

const Template: ComponentStory<typeof ProgressPagination> = (args) => (
  <ProgressPagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageProgress: 0.5,
  numPages: 5,
  currentPage: 2,
};
