import React from "react";

interface ChipProps {
  children: React.ReactNode;
  color: string;
  border: string;
  isDisabled: boolean;
  variant?: "success" | "primary" | "default" | "outline";
}
const variantStyles = {
  success: "bg-green-500 text-white", // Success color
  primary: "bg-blue-500 text-white", // Primary color
  default: "bg-gray-300 text-black", // Default color
  outline: "border border-gray-500 text-gray-500", // Outline style
};

const Chip = ({ children, color, border, isDisabled, variant }: ChipProps) => {
  let variantClass = "";
  if (variant) {
    variantClass = variantStyles[variant] || variantStyles.default;
  }
  return (
    <span
      style={{ background: color }}
      className={`p-3  border-2 text-red-800 ${border} ${isDisabled ? "opacity-65 cursor-default" : "cursor-pointer"} ${variantClass} `}
    >
      {children}
    </span>
  );
};

export default Chip;
