import { motion, Variants } from "framer-motion";

import Education from "./Education";
import SectionContainer from "components/SectionContainer";
import Hobbies from "./Hobbies";

interface SkillsProps {
  fronted: string[];
  backend: string[];
}

const Skills: SkillsProps = {
  fronted: [
    "HTML",
    "CSS",
    "Tailwind",
    "styled-components",
    "Javascript",
    "React",
    "Next.js",
    "TypeScript",
    "GIT",
    "Github",
    "NPM",
  ],
  backend: ["Node.js", "Express", "Mongoose", "REST APIs", "MongoDB", "MySQL"],
};

const About = () => {
  return (
    <SectionContainer>
      <div className="h-full px-8 mt-8 sm:mt-16 text-white">
        <h1 className="font-bold text-yellow-400 text-4xl sm:text-5xl mb-6 sm:mb-16 text-center uppercase tracking-tight">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-24 text-base sm:text-lg">
          <div className="text-base sm:text-justify sm:text-xl mb-8">
            <h2 className="font-bold text-2xl sm:text-3xl mb-3">
              Hi, I&apos;m John Mwendwa
            </h2>
            <p className="mb-3">
              I&apos;m a freelance{" "}
              <span className="font-bold">Full Stack Web Developer</span> with a
              passion to create <span className="font-bold">responsive</span>,{" "}
              <span className="font-bold">accessible</span> and{" "}
              <span className="font-bold">inclusive</span> websites using the
              newest cutting-edge tech.
            </p>
            <p className="mb-3">
              I always wanted to pursue finance as my career path, and yes I
              enrolled to the university and pursued a Bachelor&apos;s Degree in
              B.Com (Finance Option). In the midst of this pursuit, I however
              became more curious with what my friends from other fields were
              being taught and somehow without intending to, I fell in love with
              web development.
            </p>
            <p>
              So I&apos;m mostly self-taught and my guide and teacher happens to
              be my curiosity to learn and explore.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 0, y: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.75, duration: 1 },
            }}
          >
            <h3 className="font-bold text-2xl mb-3">My Skills</h3>
            <div>
              <h3 className="text-yellow-400 font-bold">Frontend</h3>
              <motion.div
                className="flex flex-wrap font-mono"
                initial="initial"
                animate="animate1"
                variants={Container}
              >
                {Skills.fronted.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 mr-2 mt-2 rounded-sm"
                    variants={Box}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="mt-2">
              <h3 className="text-yellow-400 font-bold">Backend</h3>
              <motion.div
                className="flex flex-wrap font-mono"
                initial="initial"
                animate="animate2"
                variants={Container}
              >
                {Skills.backend.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 mr-2 mt-2 rounded-sm"
                    variants={Box}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Education />
        <Hobbies />
      </div>
    </SectionContainer>
  );
};

const Container: Variants = {
  initial: {},
  animate1: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
  animate2: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 4.05,
    },
  },
};

const Box: Variants = {
  initial: {
    opacity: 0,
  },
  animate1: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  animate2: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default About;
