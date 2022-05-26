import React from "react";

interface ContainerItemProps {
  children?: React.ReactNode;
  colSpanLg: number;
}

const ContainerItem = ({ children, colSpanLg }: ContainerItemProps) => {
  return (
    <section
      className={`col-span-1 row-span-1 ${
        colSpanLg === 4 ? "lg:col-span-4" : "lg:col-span-2"
      }`}
    >
      {children}
    </section>
  );
};

export default ContainerItem;
