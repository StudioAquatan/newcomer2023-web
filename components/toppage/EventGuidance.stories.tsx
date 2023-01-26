import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import EventGuidance from "./EventGuidance";

export default {
  title: "toppage/EventGuidance",
  component: EventGuidance,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EventGuidance>;

const Template: ComponentStory<typeof EventGuidance> = () => <EventGuidance />;

export const Default = Template.bind({});
