import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Layout from "components/layout";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`${inter.variable} font-sans bg-gray-900`}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={Container}
        key={router.route}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

const Container: Variants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

export default MyApp;
