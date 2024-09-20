import { ReactNode } from "react";

const Container = ({
  className = "pb-20",
  children
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${className} px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl  `}>
      {children}
    </section>
  );
};

export default Container;
