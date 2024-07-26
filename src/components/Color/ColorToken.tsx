import React from "react";
import "./colors.css"; // Import the CSS file

type ColorTokenProps = {
  color: string;
  name?: string;
};

const ColorToken: React.FC<ColorTokenProps> = ({ color, name }) => {
  return (
    <div className="color-token" style={{ backgroundColor: color }}>
      <span className="color-name">{name || color}</span>
    </div>
  );
};

export default ColorToken;
