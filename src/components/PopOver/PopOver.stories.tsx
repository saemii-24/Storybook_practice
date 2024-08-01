// PopOver.stories.tsx
import { Meta } from "@storybook/react";
import PopOver from "./PopOver";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

const meta: Meta<typeof PopOver> = {
  title: "Components/PopOver",
  component: PopOver,
  argTypes: {
    disabled: { control: "boolean" },
    onOpenHandler: { action: "toggled" }, // action을 추가합니다.
  },
};

export default meta;

export const PopOverComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopOver = () => {
    setIsOpen((prev) => !prev);
    action("클릭")();
  };

  return (
    <PopOver disabled={false} isOpen={isOpen} onOpenHandler={togglePopOver} />
  );
};
