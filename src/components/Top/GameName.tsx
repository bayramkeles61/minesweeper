import { FC } from "react";

export type GameNameProps = {
  /**
   * Text inside the header
   */
  children: string;
};

const GameName: FC<GameNameProps> = ({ children }) => {
  return <h1 className="text-[2em]">{children}</h1>;
};

export default GameName;
