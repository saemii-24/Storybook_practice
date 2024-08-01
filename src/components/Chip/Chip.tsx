// Chip.tsx
import React from "react";

interface ChipProps {
  color?: string; // Background color
  children?: React.ReactNode; // Content of the chip
  border?: string; // Border color
  isDisabled?: boolean; // Whether the chip is disabled
  variant?: "success" | "outline" | "primary" | "default"; // Variant styles
}

const variantClasses: Record<string, string> = {
  success: "text-white bg-green-500 border-green-500",
  outline: "text-gray-700 border-gray-500 bg-transparent",
  primary: "text-white bg-blue-500 border-blue-500",
  default: "text-gray-700 bg-gray-100 border-gray-300",
};

const Chip: React.FC<ChipProps> = ({
  color = "bg-gray-200",
  children = "Chip",
  border = "border-gray-300",
  isDisabled = false,
  variant = "default",
}) => {
  const baseClasses =
    "inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-medium";
  const variantClass = variantClasses[variant] || variantClasses.default;

  return (
    <span
      className={`${baseClasses} ${color} ${border} ${variantClass} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-disabled={isDisabled}
    >
      {children}
    </span>
  );
};

export default Chip;
