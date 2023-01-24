import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import OfficialAccounts from "./OfficialAccounts";

export default {
  title: "Footer/OfficialAccounts",
  component: OfficialAccounts,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "#E7E7E7" }],
    },
  },
} as ComponentMeta<typeof OfficialAccounts>;

const Template: ComponentStory<typeof OfficialAccounts> = () => (
  <OfficialAccounts />
);

export const Default = Template.bind({});
