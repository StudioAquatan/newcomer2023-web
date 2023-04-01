import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Confetti from "./Confetti";

export default {
  title: "Visited/Confetti",
  component: Confetti,
  argTypes: {},
} as ComponentMeta<typeof Confetti>;

const Template: ComponentStory<typeof Confetti> = (args) => (
  <div
    css={css`
      position: absolute;
      top: -50vh;
      width: 100vw;
      height: 150vh;
    `}
  >
    <Confetti {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  count: 50,
  size: 15,
  fall: {
    duration: {
      min: 30,
      max: 80,
    },
    delay: {
      min: 0,
      max: 100,
    },
  },
  piece: {
    duration: {
      min: 10,
      max: 20,
    },
  },
};
