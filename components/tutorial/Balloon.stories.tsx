import { ComponentStory, ComponentMeta } from "@storybook/react";
import Balloon from "./Balloon";

export default {
  title: "Tutorial/Balloon",
  component: Balloon,
} as ComponentMeta<typeof Balloon>;

const Template: ComponentStory<typeof Balloon> = (args) => (
  <div style={{ width: "200px", height: "200px", display: "flex" }}>
    <Balloon {...args}>test</Balloon>
  </div>
);

export const Bottom = Template.bind({});
Bottom.args = {
  direction: "bottom",
};

export const Right = Template.bind({});
Right.args = {
  direction: "right",
};
