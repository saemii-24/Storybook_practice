import React from "react";
import { Meta } from "@storybook/react";
import ColorToken from "./ColorToken";
import "./colors.css"; // Import the CSS file

// Define Meta configuration for Storybook
export default {
  title: "Foundations/Color Tokens",
  component: ColorToken,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ColorToken>;

// Define color tokens
const colors = [
  { color: "#FF5733", name: "Vibrant Red" },
  { color: "#33FF57", name: "Bright Green" },
  { color: "#3357FF", name: "Deep Blue" },
  { color: "#FFFF33", name: "Sunny Yellow" },
  { color: "#FF33FF", name: "Bright Magenta" },
  { color: "#00FFFF", name: "Aqua Blue" },
  { color: "#FF8C00", name: "Dark Orange" },
  { color: "#800080", name: "Purple" },
  { color: "#008000", name: "Green" },
  { color: "#C0C0C0", name: "Silver" },
];

// Define a Story for Color Tokens
export const ColorTokens = () => (
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {colors.map((color, index) => (
      <ColorToken key={index} color={color.color} name={color.name} />
    ))}
  </div>
);
