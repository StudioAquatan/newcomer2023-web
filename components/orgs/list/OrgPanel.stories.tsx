import { ComponentStory, ComponentMeta } from "@storybook/react";
import OrgPanel from "./OrgPanel";

export default {
  title: "Orgs/List/OrgPanel",
  component: OrgPanel,
} as ComponentMeta<typeof OrgPanel>;

const Template: ComponentStory<typeof OrgPanel> = (args) => (
  <OrgPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  org: {
    id: "0",
    fullName: "Studio Aquatan",
    shortName: "StudioAquatan",
    shortDescription: "あくあたん工房です",
    logo: {
      src: "/org_icons/studioaquatan.png",
      width: 150,
      height: 150,
    },
    logoFocus: false,
    description: "<p>Make Aquatan Great Again<br/>Make Aquatan Great Again</p>",
    location: "8-302",
    fees: "なし",
    activeDays: "LT会/部会 毎月最終金曜日 18:00~",
    links: ["https://twitter.com/StudioAquatan", "https://www.aquatan.studio/"],
  },
  isVisited: false,
};
