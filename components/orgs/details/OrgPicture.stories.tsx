import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import OrgPicture from "./OrgPicture";

export default {
  title: "Orgs/OrgPicture",
  component: OrgPicture,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrgPicture>;

const Template: ComponentStory<typeof OrgPicture> = (args) => (
  <div style={{ width: 500, height: 500 }}>
    <OrgPicture {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: "/toppage/stamp-rally.png",
  isMovie: false,
  width: 300,
  height: 450,
};
