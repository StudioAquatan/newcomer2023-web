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
  items: [
    {
      label: "あくあたん工房",
      link: {
        href: "https://www.aquatan.studio/",
        external: true,
      },
    },
    {
      label: "企画部irodori",
      link: {
        href: "https://sites.google.com/view/kit-irodori/%E3%83%9B%E3%83%BC%E3%83%A0",
        external: true,
      },
    },
  ],
};

export const Others = Template.bind({});
Others.args = {
  title: "その他",
  items: [{ label: "プライバシーポリシー", link: { href: "/privacy-policy" } }],
};
