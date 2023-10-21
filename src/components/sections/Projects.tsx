import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionContainer from "components/SectionContainer";
import blogImage from "../../../public/projects/blog.png";

interface ProjectDetailsProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  source?: string;
}

const ProjectDetails: ProjectDetailsProps[] = [
  {
    image: {
      src: "/projects/blog.png",
      alt: "Image of my dev blog",
    },
    title: "Blog",
    description:
      "A blog for all developers. You can create your account, and start publishing your articles right away. Articles update in real-time and therefore there is no frustration of continually deploying your site once you finish writing a new article.",
    technologies: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Next-auth",
      "express",
      "mongoose",
      "nodemailer",
      "NodeJS",
      "MongoDB",
      "react-markdown",
    ],
    demo: "https://developers-home.vercel.app/",
  },
  {
    image: {
      src: "/projects/movies.webp",
      alt: "Image of my movies website",
    },
    title: "Movies Website",
    description:
      "If you've read my about page you definitely know that I'm a big fan of movies. I just had to create a site where I can download movies for free and without sooo many ads getting in my way. I hope this site benefits you as it does for me.",
    technologies: ["React", "Tailwind", "Typescript", "Rest Api", "debounce"],
    demo: "https://react-movies-lac.vercel.app/",
    source: "https://github.com/JohnMwendwa/react-movies-app",
  },
  {
    image: {
      src: "/projects/vet2.png",
      alt: "Image of the vet website",
    },
    title: "Vet Admin Dashboard",
    description:
      "This is an admin dashboard of a vet management system. It incorporates many features such as tracking daily new clients, total revenue generated, number of clients and employees, scheduled appointments, notifications from clients and employees, ability to add new clients and employees, searching and filtering and military grade authentication system just to mention but a few  ",
    technologies: [
      "Next.js",
      "Tailwind",
      "Mongoose",
      "MongoDB",
      "Next-auth",
      "TypeScript",
    ],
    demo: "https://vet-management-system.vercel.app/",
    source: "https://github.com/JohnMwendwa/vet-management-system",
  },
  {
    image: {
      src: "/projects/book.png",
      alt: "Image with books that am currently reading",
    },
    title: "Current Read",
    description:
      "This website is for keeping track of books that I'm currently reading. I know I didn't put reading among my hobbies but neither did I put eating, because reading has become an integral part of my lifestyle. Me and books we just love each other. You can download or fork the project and keep track of your own reading list.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Next-auth",
      "Tailwind",
      "NodeJS",
      "mongoose",
      "MongoDB",
    ],
    demo: "https://current-book.vercel.app/",
    source: "https://github.com/JohnMwendwa/current-read",
  },
];

const FramerImage = motion(Image);

const Projects = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  const getWidth = () => {
    const smallWidth = window.innerWidth;
    if (smallWidth <= 640) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  return (
    <div className="my-8">
      <SectionContainer>
        <h1 className="font-bold text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-16 w-full text-center uppercase tracking-tight">
          Projects
        </h1>

        <div className="grid grid-cols-12 gap-y-8 md:gap-12 px-4 sm:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="col-span-12 w-full flex flex-col md:flex-row
         items-center justify-between rounded-3xl border border-black shadow-2xl p-4 sm:p-12 bg-white"
          >
            <div className="relative w-full h-[300px] md:h-full md:w-1/2  overflow-hidden rounded-lg bg-gray-400">
              <Image
                src={blogImage}
                alt={ProjectDetails[0].image.alt}
                fill={true}
                placeholder="blur"
                className="w-full object-cover"
                sizes="(min-width: 1340px) 527px, (min-width: 780px) calc(50.74vw - 143px), (min-width: 640px) calc(100vw - 274px), calc(100vw - 98px)"
                priority
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between items-start pl-6 mt-2 md:mt-0">
              <span className="text-yellow-700 font-medium text-xl">
                Featured
              </span>
              <h2 className="py-2 font-bold text-4xl">
                {ProjectDetails[0].title}
              </h2>
              <p>{ProjectDetails[0].description}</p>
              <p className="mt-2">
                <span className="font-bold">Technologies : </span>
                {ProjectDetails[0].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex flex-wrap px-3 py-1 mt-1 mr-2 rounded-lg bg-yellow-400/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <div className="flex w-full justify-center items-center my-3">
                <Link
                  href={ProjectDetails[0].demo}
                  target="_blank"
                  className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-2 text-sm rounded-lg"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>

          {ProjectDetails.slice(1, 4).map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: smallScreen ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: smallScreen ? 0 : 0.4 * idx,
              }}
              key={idx}
              className="col-span-12 md:col-span-6 xl:col-span-4 flex flex-col border border-gray-200 rounded-2xl shadow-sm shadow-gray-100"
            >
              <motion.div
                className="relative w-full h-[300px] overflow-hidden rounded-t-2xl bg-gray-400"
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FramerImage
                  src={project.image.src}
                  alt={project.image.alt}
                  className="w-full h-auto rounded-t-lg object-cover"
                  sizes="(min-width: 1280px) 350px, (min-width: 780px) calc(50vw - 114px), (min-width: 640px) calc(100vw - 178px), calc(100vw - 66px)"
                  fill
                />
              </motion.div>

              <div className="mt-3 px-4 py-2 text-yellow-100 flex-1">
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-3 text-gray-300">{project.description}</p>

                <p className="mb-3">
                  <span className="font-bold">Technologies : </span>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex flex-wrap px-3 py-1 mt-1 mr-2 rounded-lg bg-yellow-400/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex justify-start items-center mb-3 px-4 space-x-2">
                <Link
                  href={project.demo}
                  target="_blank"
                  className="bg-yellow-700 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 text-sm rounded-lg"
                >
                  Live Demo
                </Link>
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    className="bg-orange-700 hover:bg-orange-600 text-white p-4 sm:px-6 py-2 text-sm rounded-lg"
                  >
                    Source Code
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Projects;
