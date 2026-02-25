import React from "react";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";

const projects = [
  {
    id: 1,
    title: "SnapNote-Notes Saver",
    description: "A beautiful Notes saver site using React and Tailwind.",
    image: `${Project1}`,
    tags: ["React", "TailwindCSS", "Vite", "Redux"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Pranav-7262/react-by-pranav/tree/main/14SnapNote-notes-saver",
  },
  {
    id: 2,
    title: "Pokemon Generator",
    description: "A Random Pokemon Generator app using React and Tailwind.",
    image: `${Project2}`,
    tags: ["React", "TailwindCSS", "PokeAPI"],
    demoUrl: "https://pokemonbypranav.netlify.app/",
    githubUrl: "https://github.com/Pranav-7262/pokemon-generator-react",
  },
  {
    id: 3,
    title: "WebQuizMaster - Quiz app",
    description: "Web-Dev Quizer made with using HTML,CSS and JS.",
    image: `${Project3}`,
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Pranav-7262/Web-Development-Projects/tree/main/WEB-Projects/WebQuizMaster",
  },
];
export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
          {" "}
          Featured <span className="text-[#8245ec]"> Projects </span>
          <div className="w-75 h-1 bg-purple-500 mx-auto mt-4"></div>
        </h2>
        <p className="text-center text-muted-foreground my-12 max-w-2xl mx-auto sm:text-lg md:text-lg text-gray-400 leading-relaxed font-semibold">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, key) => (
            <div
              key={key}
              className=" bg-[#1c0f40] rounded-lg overflow-hidden  shadow-xs "
            >
              <div className="h-50 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-75 hover:scale-125"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-1.5 py-0.5 text-xs font-medium border rounded-full bg-[#191131] text-white hover:bg-[#8245ec] transition-colors duration-300 hover:shadow-md md:text-sm ls:text-xs"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-center text-white">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 text-white">{project.description}</p>
                <div className="flex  space-x-2 mb-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        className=" text-white hover:text-[#8245ec] transition-colors duration-300"
                        size={20}
                      />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github
                        className=" text-white hover:text-[#8245ec] transition-colors duration-300"
                        size={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
