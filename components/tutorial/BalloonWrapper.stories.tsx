import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BalloonContainer } from "./Balloon";

export default {
  title: "Tutorial/BalloonContainer",
  component: BalloonContainer,
} as ComponentMeta<typeof BalloonContainer>;

const Template: ComponentStory<typeof BalloonContainer> = (args) => (
  <div
    style={{
      width: "200px",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <BalloonContainer balloonContent={"Balloon"} direction={args.direction}>
      <p>Target</p>
    </BalloonContainer>
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
