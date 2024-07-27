import type { Meta } from "@storybook/react";
import ColorToken from "./ColorToken";
import "./colors.css";

type Color = {
  color: string;
  name: string;
};

type ColorGroup = {
  [key: string]: Color[];
};

//스토리북내에 메타데이터를 정의한다.
const meta = {
  title: "Foundations/Color Tokens",
  component: ColorToken,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof ColorToken>;
export default meta;

// 컬러토큰을 정한다.
const colorGroups: ColorGroup = {
  Red: [
    { color: "#FF0000", name: "Red" },
    { color: "#FF4C4C", name: "Red 100" },
    { color: "#FF9999", name: "Red 200" },
    { color: "#FFCCCC", name: "Red 300" },
  ],
  Yellow: [
    { color: "#FFFF00", name: "Yellow" },
    { color: "#FFFF4C", name: "Yellow 100" },
    { color: "#FFFF99", name: "Yellow 200" },
    { color: "#FFFFCC", name: "Yellow 300" },
  ],
  Green: [
    { color: "#00FF00", name: "Green" },
    { color: "#4CFF4C", name: "Green 100" },
    { color: "#99FF99", name: "Green 200" },
    { color: "#CCFFCC", name: "Green 300" },
  ],
};

// ColorToken 컴포넌트를 다양한 색상으로 렌더링해,
// 색상 토큰을 스토리북 내에서 시각적으로 표현한다.
export const ColorTokens: React.FC = () => (
  <div>
    {Object.keys(colorGroups).map((group) => (
      <div key={group} style={{ marginBottom: "40px" }}>
        <h3>{group} Colors</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {colorGroups[group].map((color, index) => (
            <ColorToken key={index} color={color.color} name={color.name} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
