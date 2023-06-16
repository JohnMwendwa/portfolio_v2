import { ReactNode } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import SectionContainer from "components/SectionContainer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="grid grid-rows-[auto_1fr_auto] min-h-screen dynamic relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.75 }}
    >
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-800 py-4 text-white text-center">
        <SectionContainer>
          &copy; John Mwendwa <span>{new Date().getFullYear()}</span>
        </SectionContainer>
      </footer>
    </motion.div>
  );
};

export default Layout;
