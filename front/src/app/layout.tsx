import './globals.css'

import React, { PropsWithChildren } from "react";
import Navbar from '../Components/Navbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
