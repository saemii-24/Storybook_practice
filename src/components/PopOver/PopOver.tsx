import React from "react";

interface PopOverProps {
  disabled?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const PopOver: React.FC<PopOverProps> = ({ disabled, isOpen, onToggle }) => {
  console.log(isOpen);
  return (
    <div
      className={`flex gap-2 flex-col items-center justify-center ${disabled ? `opacity-20` : `opacity-100`}`}
    >
      <div
        className={`bg-stone-900 transition text-white px-4 py-4 rounded-xl ${isOpen ? `opacity-0` : `opacity-100`}`}
      >
        🩷🩷You Complete Me!🩷🩷
      </div>
      <div
        onClick={onToggle}
        className="opacity-80 bg-stone-800 text-white px-10 py-4 transition cursor-pointer rounded-lg hover:opacity-100"
      >
        Baby you special You make me feel complete girl
      </div>
    </div>
  );
};

export default PopOver;
