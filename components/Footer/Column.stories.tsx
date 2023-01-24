import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Column from "./Column";

export default {
  title: "Footer/Column",
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;

export const Providers = Template.bind({});
Providers.args = {
  title: "提供",
  links: [
    { text: "あくあたん工房", href: "" },
    { text: "企画部irodori", href: "" },
  ],
};

export const Others = Template.bind({});
Others.args = {
  title: "その他",
  links: [{ text: "プライバシーポリシー", href: "" }],
};
