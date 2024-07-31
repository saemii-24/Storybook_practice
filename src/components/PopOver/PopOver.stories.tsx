import React, { useState } from "react";
import { Meta } from "@storybook/react";
import PopOver from "./PopOver";

const meta: Meta<typeof PopOver> = {
  title: "Components/PopOver",
  component: PopOver,
  argTypes: {
    isOpen: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;

// 스토리북에서 조절하는 컴포넌트의 부모 컴포넌트를 가상으로 만들어 조정
export const PopOverStory: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return <PopOver isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
};
