// Button2.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button2 from "./Button2";

const meta: Meta<typeof Button2> = {
  title: "component/Button", //component 폴더의 Button으로 생성됨.
  component: Button2,
  parameters: {
    // 컴포넌트를 가운데에 정렬함
    layout: "centered",
  },
  //자동으로 문서를 생성함
  tags: ["autodocs"],
  // argument(인자) 타입을 정의한다.
  // 컴포넌트의 프로퍼티와 타입을 정의하고,
  //Controls 패널에 어떻게 표시할지 설정한다.
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
  //객체가 특정 타입의 요구사항을 충족하는지 확인한다.
} satisfies Meta<typeof Button2>;

export default meta;

type Story = StoryObj<typeof Button2>;

export const Basic: Story = {
  args: {
    children: "Click me",
    color: "default",
    size: "md",
  },
};
