import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Buttons/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "test",
  label: "Test",
};
