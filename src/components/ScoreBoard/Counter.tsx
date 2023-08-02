import { FC } from "react";

type CounterProps = {
  /**
   * Number in the counter
   */
  children: string;
};

const Counter: FC<CounterProps> = ({ children }) => {
  return (
    <div className="frame inline-block py-0 px-[0.3vw] text-red-500 leading-8 tracking-widest bg-gray-900 shadow shadow-red-500">
      {children}
    </div>
  );
};

export default Counter;
