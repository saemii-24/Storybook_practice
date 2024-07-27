import React from "react";

interface ChipProps {
  children: React.ReactNode;
  color: string;
}

const Chip = ({ children, color }: ChipProps) => {
  return <span className={`p-3 ${color} text-red-500`}>{children}</span>;
};

export default Chip;
