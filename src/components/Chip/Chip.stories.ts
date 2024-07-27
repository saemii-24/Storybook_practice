// Chip.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Chip/Chip",
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "bg-red-500",
    children: "Button",
  },
};
