import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const FramerImage = motion(Image);

const ProectDetails = [
  {
    image: {
      src: "/projects/blog.png",
      alt: "",
    },
    title: "Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae molestiae laboriosam accusamus soluta similique, possimus eveniet amet sunt? Voluptates voluptatibus cumque ex similique nisi accusantium nulla nihil accusamus sint.",
    technologies: ["Next.js", "Tailwind", "NodeJS", "MongoDB"],
    demo: "https://blog.johnmwendwa.me/",
  },
  {
    image: {
      src: "/projects/movies.webp",
      alt: "",
    },
    title: "Movies Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae molestiae laboriosam accusamus soluta similique, .",
    technologies: ["Next.js", "Tailwind", "NodeJS", "MongoDB"],
    demo: "https://movies.johnmwendwa.me/",
    source: "https://github.com/JohnMwendwa/react-movies-app",
  },
  {
    image: {
      src: "/projects/chatbot.webp",
      alt: "",
    },
    title: "Chatbot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae molestiae laboriosam accusamus soluta similique, possimus eveniet amet sunt? Voluptates voluptatibus cumque ex similique nisi accusantium nulla nihil accusamus sint.",
    technologies: ["Next.js", "Tailwind", "NodeJS", "MongoDB"],
    demo: "https://chatbot.johnmwendwa.me/",
    source: "https://github.com/JohnMwendwa/chatbot",
  },
  {
    image: {
      src: "/projects/chatbot.webp",
      alt: "",
    },
    title: "Current Read",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae molestiae laboriosam accusamus soluta similique, possimus eveniet amet sunt? Voluptates voluptatibus cumque ex similique nisi accusantium nulla nihil accusamus sint.",
    technologies: ["Next.js", "Tailwind", "NodeJS", "MongoDB"],
    demo: "https://books.johnmwendwa.me/",
    source: "https://github.com/JohnMwendwa/current-read",
  },
];

const Projects = () => {
  return (
    <div className="my-8 px-6 sm:px-16 w-full">
      <h1 className="font-bold text-white text-4xl sm:text-6xl mb-16 w-full text-center uppercase tracking-tight">
        Projects
      </h1>
      <div className="grid grid-cols-12 gap-y-8 md:gap-12 px-4">
        <div
          className="col-span-12 w-full flex flex-col md:flex-row
         items-center justify-between rounded-3xl border border-black shadow-2xl p-4 sm:p-12 bg-white"
        >
          <div className="flex flex-col w-full md:w-1/2 max-h-[300px] overflow-hidden rounded-lg border-2">
            <Image
              src={ProectDetails[0].image.src}
              alt=""
              width={300}
              height={200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between items-start pl-6 mt-2 md:mt-0">
            <span className="text-blue-400 font-medium text-xl">Featured</span>
            <h2 className="py-2 font-bold text-4xl">
              {ProectDetails[0].title}
            </h2>
            <p>{ProectDetails[0].description}</p>
            <p className="mt-2">
              <span className="font-bold">Technologies : </span>
              {ProectDetails[0].technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex flex-wrap px-3 py-1 mt-1 mr-2 rounded-lg bg-orange-200/50 text-sm saturate-200"
                >
                  {tech}
                </span>
              ))}
            </p>
            <div className="flex w-full justify-center items-center py-2">
              <Link
                href={ProectDetails[0].demo}
                target="_blank"
                className="bg-orange-700 text-white px-6 py-2 text-sm rounded-lg"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>

        {ProectDetails.slice(1, 4).map((project, idx) => (
          <div
            key={idx}
            className="col-span-12 md:col-span-6 xl:col-span-4 flex flex-col border border-gray-200 rounded-2xl shadow-sm shadow-gray-100"
          >
            <motion.div
              className="w-full max-h-[300px] md:h-auto overflow-hidden rounded-t-2xl "
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FramerImage
                src={project.image.src}
                alt={project.image.alt}
                className="min-w-full h-auto rounded-t-lg object-cover"
                width={300}
                height={300}
              />
            </motion.div>

            <div className="mt-3 px-4 py-2 text-gray-100 flex-1">
              <h3 className="mb-2 text-2xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mb-3 text-lg text-gray-300">
                {project.description}
              </p>

              <p className="mb-3">
                <span className="font-bold">Technologies : </span>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex flex-wrap px-3 py-1 mt-1 mr-2 rounded-lg bg-orange-400/20 text-sm saturate-200"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex justify-between items-center mb-3 px-4 space-x-2">
              <Link
                href={project.demo}
                target="_blank"
                className="bg-orange-700 text-white px-6 py-2 text-sm rounded-lg"
              >
                Live Demo
              </Link>
              {project.source && (
                <Link
                  href={project.source}
                  target="_blank"
                  className="bg-blue-800 text-white px-6 py-2 text-sm rounded-lg"
                >
                  Source Code
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
