import { ReactNode } from "react";
import { DarkGradient } from "../animations/grident/DarkGradient";

export const MoveUp = ({ children }: { children: ReactNode }) => {
    return (
      <div className="-mt-44 pt-44 bg-white  relative overflow-hidden">
        <DarkGradient/>
        {children}
      </div>
    );
  };