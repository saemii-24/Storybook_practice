// Chip.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Chip/Chip",
  component: Chip,
  argTypes: {
    // color에 text input을 사용할 수 있게 한다.
    // 이를 통해 tailwind가 바로바로 적용된다.
    color: { control: "text" },
    children: {
      control: "radio", // 라디오 버튼을 쓴다.
      options: ["확인", "저장", "닫기"], // 라디오 버튼 옵션 지정
    },
    border: {
      control: "select", // 셀렉트 드롭다운을 쓴다.
      options: ["border-red-500", "border-yellow-500", "border-blue-500"],
    },
    isDisabled: { control: "boolean" }, // 불린 값을 쓴다.
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "bg-yellow-300", // Default color
    children: "버튼", // Default children
    border: "border-green-400",
    isDisabled: false,
  },
};
