import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Organizations from "./Organizations";

export default {
  title: "toppage/Organizations",
  component: Organizations,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "#AAA" }],
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Organizations>;

const Template: ComponentStory<typeof Organizations> = () => <Organizations />;

export const Default = Template.bind({});
