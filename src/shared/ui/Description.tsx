import { ReactNode } from "react";

const Description = ({ children, className}: { children: ReactNode,className?:string }): JSX.Element => {
  return (
    <p className={`${className} my-4  leading-[31px] sm:text-[18px] mb-10 `}>
      {children}
    </p>
  );
};

export default Description;
