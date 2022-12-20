import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Варианты внешнего вида",
      control: {
        type: "select",
      },
      defaultValue: "primary",
    },
    children: {
      name: "label",
      description: "children",
      defaultValue: "Click me!",
      control: "text",
    },
    size: {
      control: {
        type: "select",
      },
      defaultValue: "default",
    },
    wade: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Wade = Template.bind({});
Wade.args = {
  wade: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Big = Template.bind({});
Big.args = {
  size: "big",
};
