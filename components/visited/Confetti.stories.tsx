import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Confetti from "./Confetti";

export default {
  title: "Visited/Confetti",
  component: Confetti,
} as ComponentMeta<typeof Confetti>;

const Template: ComponentStory<typeof Confetti> = () => (
  <div
    css={css`
      height: 100vh;
    `}
  >
    <Confetti />
  </div>
);

export const Default = Template.bind({});
