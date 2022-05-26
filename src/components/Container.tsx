import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container py-8 grid gap-7 grid-cols-1 lg:grid-rows-1 lg:grid-cols-6">
      {children}
    </div>
  );
};

export default Container;
