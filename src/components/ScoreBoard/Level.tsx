import { FC } from "react";

export interface LevelProps {
  /**
   * Array of possible game levels
   */
  children: string[];
}

const Level: FC<LevelProps> = ({ children }) => {
  return (
    <select className="m-0 h-[2.5vw] rounded-none border-[0.15vw] border-gray-300 bg-gray-400">
      {children.map((item: string) => (
        <option
          key={item}
          value={item}
          className="font-normal block  whitespace-nowrap min-h-[1.2em] pt-0 px-[0.2vw] pb-[0.2vw]"
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default Level;
