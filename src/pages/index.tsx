import Link from "next/link";
import { Variants, motion } from "framer-motion";

import SectionContainer from "components/SectionContainer";
import GithubIcon from "assets/github";
import MailIcon from "assets/mail";
import EditIcon from "assets/edit";

const FramerLink = motion(Link);

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center py-8 px-4">
      <SectionContainer>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            className="text-center sm:text-start"
            variants={AnimateTextVariant}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-3">
              Hey 👋 I&apos;m John
            </h1>
            <h2 className="font-bold text-xl sm:text-3xl text-yellow-400 saturate-200 mb-4">
              Full Stack Web Developer
            </h2>
            <p className="max-w-sm sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-100 sm:text-justify">
              I&apos;m an advocate for building responsive, accessible and
              inclusive digital products and experiences for the web based in
              Nairobi, Kenya
            </p>
          </motion.div>
          <div className="w-full  mx-auto flex flex-col justify-center items-center  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4 md:mt-8 px-6">
            <FramerLink
              href={"/contact"}
              className="flex items-center justify-center group w-full max-w-xs sm:w-auto px-8 py-2 rounded-md ring-2 ring-yellow-400 hover:scale-105 hover:bg-gray-800 hover:ring focus:ring-4 outline-none transition-all duration-300 text-gray-200 backdrop-blur-sm backdrop-filter"
              variants={AnimatedLinkVariant}
              initial="initial"
              animate="animate"
            >
              <MailIcon className="group-hover:fill-yellow-400 mr-2" />
              Get in Touch
            </FramerLink>
            <FramerLink
              href="https://developers-home.vercel.app/"
              aria-label="Visit my developer blog"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center group w-full max-w-xs sm:w-auto px-8 py-2 rounded-md ring-2 ring-yellow-400 hover:scale-105 hover:bg-gray-800 hover:ring focus:ring-4 outline-none transition-all duration-300 text-gray-200 backdrop-blur-sm backdrop-filter"
              variants={AnimatedLinkVariant}
              initial="initial"
              animate="animate2"
            >
              <EditIcon className="group-hover:fill-yellow-400 mr-2 w-5 h-5" />
              Blog
            </FramerLink>
            <FramerLink
              href="https://github.com/JohnMwendwa"
              aria-label="Visit my github profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center group w-full max-w-xs sm:w-auto px-8 py-2 rounded-md ring-2 ring-yellow-400 hover:scale-105 hover:bg-gray-800 hover:ring focus:ring-4 outline-none transition-all duration-300 text-gray-200 backdrop-blur-sm backdrop-filter"
              variants={AnimatedLinkVariant}
              initial="initial"
              animate="animate3"
            >
              <GithubIcon className="group-hover:fill-yellow-400 mr-2 w-5 h-5" />
              Github
            </FramerLink>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

const AnimateTextVariant: Variants = {
  initial: { opacity: 0, x: 0, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: [-100, 0, -50, 0],
    transition: { type: "spring", bounce: 0.75 },
  },
};

const AnimatedLinkVariant: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.75,
    },
  },
  animate2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.75,
    },
  },
  animate3: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.25,
      duration: 0.75,
    },
  },
};
