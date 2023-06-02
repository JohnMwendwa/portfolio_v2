import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
        &copy; John Mwendwa <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};

export default Layout;
