import React, { ReactNode } from "react";

const Container = ({
  className = "pb-8",
  children,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <section className={`${className} px-3 py-8 max-w-6xl mx-auto sm:px-4  `}>
      {children}
    </section>
  );
};

export default Container;
