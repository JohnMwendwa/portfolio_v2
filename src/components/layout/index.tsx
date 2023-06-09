import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import SectionContainer from "components/SectionContainer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen relative">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-800 py-4 text-white text-center">
        <SectionContainer>
          &copy; John Mwendwa <span>{new Date().getFullYear()}</span>
        </SectionContainer>
      </footer>
    </div>
  );
};

export default Layout;
