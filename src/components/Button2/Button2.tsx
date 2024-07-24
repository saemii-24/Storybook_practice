// Button2.tsx
import React from "react";
import "./button2.css";

export interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
}

function Button2({ children, color = "#000000", size = "md" }: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: color }} // 인라인 스타일로 색상 적용
      className={size} // 크기만 클래스로 적용
    >
      {children}
    </button>
  );
}

export default Button2;
