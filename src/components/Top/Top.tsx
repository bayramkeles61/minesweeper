import { FC } from "react";
import GameName from "./GameName";
import Legend, { LegendProps } from "./Legend";

export type TopComponentType = LegendProps;

const Top: FC<TopComponentType> = ({ ...legendProps }) => {
  return (
    <header className="text-center relative inline-block">
      <GameName>Minesweeper</GameName>
      <Legend {...legendProps} />
    </header>
  );
};

export default Top;
