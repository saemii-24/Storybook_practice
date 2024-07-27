import React from "react";

interface ChipProps {
  children: React.ReactNode;
  color: string;
  border: string;
  isDisabled: boolean;
}

const Chip = ({ children, color, border, isDisabled }: ChipProps) => {
  return (
    <span
      className={`p-3 ${color} border-2 text-red-800 ${border} ${isDisabled ? "opacity-65 cursor-default" : "cursor-pointer"}`}
    >
      {children}
    </span>
  );
};

export default Chip;
