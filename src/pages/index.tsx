import Link from "next/link";
import { motion } from "framer-motion";

const FramerLink = motion(Link);

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center py-8 px-4 bg-gray-900">
      <div className="text-center sm:text-start">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-3">
          Hey 👋 I&apos;m John
        </h1>
        <h2 className="font-bold text-2xl sm:text-3xl  text-blue-400 saturate-200 mb-4">
          Full Stack Web Developer
        </h2>
        <p className="max-w-sm sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-100">
          Am an advocate for building responsive, accessible and inclusive
          digital products and experiences for the web based in Nairobi, Kenya
        </p>
      </div>
      <div className="w-full  mx-auto flex flex-col justify-center items-center  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4 md:mt-8 px-6">
        <FramerLink
          href={"/contact"}
          className="w-full sm:w-auto border-2 px-8 py-2 rounded-md hover:scale-105 hover:border-blue-600 hover:bg-gray-800 focus:border-blue-600 outline-transparent transition-all duration-300 text-center text-gray-200 backdrop-blur-sm backdrop-filter"
          variants={AnimatedLink}
          initial="initial"
          animate="animate"
        >
          Get in Touch
        </FramerLink>
        <FramerLink
          href="https://blog.johnmwendwa.me"
          aria-label="Visit my developer blog"
          target="_blank"
          className="w-full sm:w-auto border-2 px-8 py-2 rounded-md hover:scale-105 hover:border-blue-600 hover:bg-gray-800 focus:border-blue-600 outline-transparent transition-all duration-300 text-center text-gray-200 backdrop-blur-sm backdrop-filter"
          variants={AnimatedLink}
          initial="initial"
          animate="animate2"
        >
          Blog
        </FramerLink>
        <FramerLink
          href="https://github.com/JohnMwendwa"
          aria-label="Visit my github profile"
          target="_blank"
          className="w-full sm:w-auto border-2 px-8 py-2 rounded-md hover:scale-105 hover:border-blue-600 hover:bg-gray-800 focus:border-blue-600 outline-transparent transition-all duration-300 text-center text-gray-200 backdrop-blur-sm backdrop-filter"
          variants={AnimatedLink}
          initial="initial"
          animate="animate3"
        >
          Github
        </FramerLink>
      </div>
    </div>
  );
}

const AnimatedLink = {
  initial: {
    opacity: 0,
    y: 50,
    x: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.3,
      // ease: "easeIn",
      type: "spring",
    },
  },
  animate2: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.7,
      // ease: "easeIn",
      type: "spring",
    },
  },
  animate3: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 1.2,
      // ease: "easeIn",
      type: "spring",
    },
  },
};
