import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Hero from "./Hero";

export default {
  title: "toppage/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});
