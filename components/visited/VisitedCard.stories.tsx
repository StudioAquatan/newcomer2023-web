import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import VisitedCard from "./VisitedCard";

export default {
  title: "Visited/VisitedCard",
  component: VisitedCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof VisitedCard>;

const Template: ComponentStory<typeof VisitedCard> = (args) => (
  <VisitedCard {...args} />
);

export const StudioAquatan = Template.bind({});
StudioAquatan.args = {
  orgName: "Studio Aquatan",
  logo: "/org_icons/studioaquatan.png",
  logoFocus: false,
};

export const AlreadyVisited = Template.bind({});
AlreadyVisited.args = {
  orgName: "Studio Aquatan",
  logo: "/org_icons/studioaquatan.png",
  logoFocus: false,
  alreadyVisited: true,
};

export const Orion = Template.bind({});
Orion.args = {
  orgName: "オリオン座",
  logo: "https://studioaquatan.imgix.net/newt/0e78f8e6-be36-40bf-949c-3a079a5ad97e%2F%E3%82%AA%E3%83%AA%E3%83%B2%E3%83%B3%E5%BA%A7%E3%83%AD%E3%82%B4%E7%A2%BA%E5%AE%9A%E7%89%88%E3%80%90%E9%BB%92%E3%80%91-%E3%82%A4%E3%83%87%E3%83%B3%E3%82%AA%E3%82%A6.png?auto=format&fit=max&w=256&width=256&q=75",
  logoFocus: true,
};
