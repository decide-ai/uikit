import React from "react";

type ContainerProps = {
  /** Container children */
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="mx-12 my-8 flex flex-col justify-center items-center">
    {children}
  </div>
);