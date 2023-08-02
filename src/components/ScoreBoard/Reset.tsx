import { FC, useState } from "react";

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void;
}

const Reset: FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseDown = () => {
    setMouseDown(true);
  };
  const onMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <button
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
      onClick={onReset}
      className="text-[2vw] cursor-pointer font-bold border-[0.15vw] bg-gray-300"
    >
      {mouseDown ? "😯" : "🙂"}
    </button>
  );
};

export default Reset;
