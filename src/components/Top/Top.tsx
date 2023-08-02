import { FC } from "react";
import GameName, { GameNameProps } from "./GameName";
import Legend, { LegendProps } from "./Legend";

export type TopComponentType = LegendProps & GameNameProps;

const Top: FC<TopComponentType> = ({ children, ...legendProps }) => {
  return (
    <header className="text-center relative inline-block">
      <GameName>{children}</GameName>
      <Legend {...legendProps} />
    </header>
  );
};

export default Top;
