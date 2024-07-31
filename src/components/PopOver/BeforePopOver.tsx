import { useState } from "react";

const BeforePopOver = ({ disabled }: { disabled: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //스토리를 만들 때 이렇게 안에 state를 사용하지 않고, props만을 이용한다.
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
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="opacity-80 bg-stone-800 text-white px-10 py-4 transition cursor-pointer rounded-lg hover:opacity-100"
      >
        Baby you special You make me feel complete girl
      </div>
    </div>
  );
};

export default BeforePopOver;
