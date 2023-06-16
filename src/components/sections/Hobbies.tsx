import { motion, Variants } from "framer-motion";

interface HobbieProps {
  title: string;
  description: string;
}

const HobbieDetails: HobbieProps[] = [
  {
    title: "Skating",
    description:
      "To tell you the truth, I love skating. It's one of those things I can hardly let a day pass by without even taking atleast a 5 minutes ride around my neighborhood.",
  },
  {
    title: "Travelling",
    description:
      "If you're not a kenyan, you wouldn't understand my obsession with travelling, especially outside the city. As a nation, we've been endowed with great sites that are just breath-taking.",
  },
  {
    title: "Cooking",
    description:
      "I'm not a great fan of fast foods and I believe they should be taken once in a while and so I have learned to cook my dishes and boy ooh boy do I love their taste. Well, I know not everyone finds my dishes as tasty as I do, but need I remind them the opinion of my stomach and only my stomach concerning this matter supersedes all 😎.",
  },
  {
    title: "Movies",
    description:
      "I'm also a big fan of movies and series. As I was growing up, my obsession with them always got me into trouble with my school teachers, but that's a story for another day.",
  },
];

const Container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.75,
    },
  },
};

const Word: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hobbies = () => {
  return (
    <div className="my-8 sm:my-16 text-base sm:text-xl max-w-5xl mx-auto sm:text-justify">
      <h2 className="font-bold text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-16 text-center">
        Hobbies
      </h2>
      <p>
        Whenever I&apos;m not coding, I tend to engage myself in activties that
        build me up. Some of these activities include but not limited to the
        following :
      </p>
      <motion.div
        className="py-3 space-y-4"
        initial="initial"
        whileInView="animate"
        variants={Container}
      >
        {HobbieDetails.map((hobbie, idx) => (
          <motion.p key={idx} variants={Word}>
            <span className="text-yellow-400 font-bold">{hobbie.title} : </span>
            {hobbie.description}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default Hobbies;
