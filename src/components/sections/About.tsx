import SectionContainer from "components/SectionContainer";

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
    "TypeScript",
    "Next.js",
    "GIT",
    "Github",
    "NPM",
  ],
  backend: ["Node.js", "Express", "Mongoose", "REST APIs", "MongoDB", "MySQL"],
};

const About = () => {
  return (
    <SectionContainer>
      <div className="h-full px-8 py-16 text-white">
        <h1 className="font-bold text-4xl mb-8 text-center uppercase tracking-tight">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-32 text-lg">
          <div>
            <h2 className="font-bold text-2xl mb-3">
              Hi, I&apos;m John Mwendwa{" "}
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

          <div className="mt-8">
            <h3 className="font-bold text-2xl mb-3">My Skills</h3>
            <div>
              <h3 className="text-blue-400 font-bold">Frontend</h3>
              <div className="flex flex-wrap">
                {Skills.fronted.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 m-2 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold">Backend</h3>
              <div className="flex flex-wrap">
                {Skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 m-2 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
