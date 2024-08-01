// BeforePopOver.tsx
import React from "react";

interface BeforePopOverProps {
  disabled: boolean;
  isOpen?: boolean; // 이 부분이 추가되어야 합니다.
  onOpenHandler: () => void;
}

const PopOver: React.FC<BeforePopOverProps> = ({
  disabled,
  isOpen = false,
  onOpenHandler,
}) => {
  return (
    <div>
      {isOpen && <div>PopOver Content</div>}
      <button onClick={onOpenHandler} disabled={disabled}>
        Toggle
      </button>
    </div>
  );
};

export default PopOver;
