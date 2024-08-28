import { ReactNode } from "react";

const Container = ({
  className = "pb-20",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${className} px-3   py-8 max-w-6xl mx-auto  `}>
      {children}
    </section>
  );
};

export default Container;
