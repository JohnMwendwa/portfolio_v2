import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

interface EducationDetailsProps {
  institution: string;
  period: string;
  certification: string[];
}

const EducationDetails: EducationDetailsProps[] = [
  {
    institution: "School of Life",
    period: "2023 - present",
    certification: [
      "Experience what you have learned",
      "Turn the other cheek as you prepare to knock that m** out 😎",
      "You only lose when you stop trying",
      "Smile.You don't own all the problems in the world 😊",
      "Live and let live",
    ],
  },
  {
    institution: "Udemy",
    period: "2021 - present",
    certification: [
      "Javascript Algorithms and Data Structures Masterclass",
      "The Complete Node.js Developer Course",
      "Modern Javascript for ReactJs -ES6",
      "Cyber Security for Beginners",
      "How the Internet Works & the Web Development Process",
    ],
  },
  {
    institution: "KCA University",
    period: "2017 - 2022",
    certification: ["Bachelor of Commerce (Finance Option)"],
  },
  {
    institution: "MongoDB  University",
    period: "SEP, 2021 - DEC, 2021",
    certification: [
      "MongoDB Basics",
      "Authentication & Authorization",
      "Atlas Security",
    ],
  },
];

// Create svg for smooth srolling the timeline effect
const Icon = ({ scrollYProgress }) => {
  return (
    <figure
      className="absolute left-1 sm:left-0 stroke-white"
      aria-hidden="true"
    >
      <svg
        className="-rotate-90 w-16 h-16 sm:w-[75px] sm:h-[75px]"
        width={75}
        height={75}
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-orange-600 fill-none stroke-1"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          style={{ pathLength: scrollYProgress }}
          className="fill-orange-600 saturate-200 stroke-[4px]"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="fill-yellow-300 stroke-1 animate-pulse"
        />
      </svg>
    </figure>
  );
};

const Details = ({ institution, period, certification }) => {
  const linkRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ["center end", "center center"],
  });
  return (
    <motion.li
      ref={linkRef}
      className="my-4 sm:my-8 ml-20 sm:ml-24 first:mt-0 last:mb-0 flex flex-col"
    >
      <Icon scrollYProgress={scrollYProgress} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-xl sm:text-2xl">
          {institution}
        </h3>
        <span className="capitalize font-medium text-gray-300">{period}</span>
        <ul className="font-medium w-full text-base sm:text-lg">
          {certification.map((certificate, idx) => (
            <motion.li
              className="before:content-['\2022'] before:text-yellow-400 before:text-2xl before:font-bold before:inline-block before:w-4 before:-ml-4"
              key={`cert-${idx}`}
            >
              {certificate}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-16 w-full">
      <h2 className="font-bold text-yellow-400 text-4xl sm:text-5xl mb-8 sm:mb-16 w-full text-center">
        Education
      </h2>
      <div className="relative">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[33px] sm:left-9 top-1 w-1 h-full origin-top bg-white "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
          {EducationDetails.map((item, idx) => (
            <Details
              key={`wes-${idx}`}
              institution={item.institution}
              period={item.period}
              certification={item.certification}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
