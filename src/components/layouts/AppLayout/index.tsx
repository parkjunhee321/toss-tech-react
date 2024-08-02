import React, { FC } from "react";
import { Navbar } from "../../common";

interface Props {
  children?: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}