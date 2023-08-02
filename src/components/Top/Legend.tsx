import { FC } from "react";

export type LegendProps = {
  /**
   * Feature that should be activated after first+second actions
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second action
   */
  secondAction: string;
};

const Legend: FC<LegendProps> = ({ feature, firstAction, secondAction }) => {
  return (
    <legend className="parent text-[1em] mt-0 mx-auto mb-[2vw] leading-5">
      <strong>{feature}:</strong>
      <code className="bg-slate-50">
        <span className="first-action text-red-500">{firstAction}</span> +{" "}
        <span className="second-action text-blue-500">{secondAction}</span>
      </code>
    </legend>
  );
};

export default Legend;
