import { ReactNode } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import SectionContainer from "components/SectionContainer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="grid grid-rows-[auto_1fr_auto] min-h-screen dynamic relative"
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.75 }}
    >
      <Navbar />
      <main>{children}</main>
      <footer className="py-4 text-sm text-white text-center">
        <SectionContainer>
          &copy; John Mwendwa <span>{new Date().getFullYear()}</span>
        </SectionContainer>
      </footer>
    </motion.div>
  );
};

export default Layout;
