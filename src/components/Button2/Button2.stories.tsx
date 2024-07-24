// Button2.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button2 from "./Button2";

const meta: Meta<typeof Button2> = {
  component: Button2,
  argTypes: {
    children: {
      control: "text",
      description: "Button label",
    },
    color: {
      control: { type: "color" },
      description: "Button color",
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "radio" },
      description: "Button size",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button2>;

export const Basic: Story = {
  args: {
    children: "Click me",
    color: "default",
    size: "md",
  },
};
