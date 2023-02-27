import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import FullscreenPager from "./FullscreenPager";

export default {
  title: "Orgs/FullscreenPager",
  component: FullscreenPager,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof FullscreenPager>;

const Template: ComponentStory<typeof FullscreenPager> = (args) => (
  <div style={{ height: 500, position: "relative" }}>
    <FullscreenPager {...args} />
  </div>
);

export const Left = Template.bind({});
Left.args = {
  showIcon: true,
  type: "left",
};

export const Right = Template.bind({});
Right.args = {
  showIcon: true,
  type: "right",
};
