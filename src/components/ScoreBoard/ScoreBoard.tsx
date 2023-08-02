import { FC } from "react";
import Counter from "./Counter";
import Level from "./Level";
import Reset from "./Reset";

export interface ScoreBoardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * Possible game scenarios
   */
  levels: string[];
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void;
  /**
   * Bombs in the field
   */
  mines: string;
}

const ScoreBoard: FC<ScoreBoardProps> = ({ time, levels, onReset, mines }) => {
  return (
    <div className="wrapper flex w-max pb-[2vw] justify-between">
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </div>
  );
};

export default ScoreBoard;
