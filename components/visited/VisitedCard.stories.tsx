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
