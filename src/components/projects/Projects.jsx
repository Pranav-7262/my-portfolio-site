import React from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.png";

const projects = [
  {
    id: 1,
    title: "Chatify - A real-time chat platform",
    description:
      "A secure real-time messaging app with cookie-based authentication.",
    image: Project1,
    tags: [
      "React",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "Authentication",
    ],
    demoUrl: "https://chatify-realtime-kq98.onrender.com",
    githubUrl: "https://github.com/Pranav-7262/chatify-realtime",
  },
  {
    id: 2,
    title: "PlantCareAI",
    description:
      "An AI-powered plant care assistant that provides personalized care tips and plant collection management.",
    image: Project2,
    tags: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "Gemini API",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Pranav-7262/plant-care-ai",
  },
  {
    id: 3,
    title: "FlowerVerse",
    description:
      "A vibrant e-commerce platform for flower enthusiasts, offering a wide variety of blooms and seamless shopping experience.",
    image: Project3,
    tags: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Authentication",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Pranav-7262/FlowerVerse",
  },
];

export const Projects = () => {
  const [tiltEnabled, setTiltEnabled] = React.useState(true);

  React.useEffect(() => {
    const check = () => setTiltEnabled(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Tilt
              key={project.id}
              tiltEnable={tiltEnabled}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.03}
              transitionSpeed={500}
              className="h-full"
            >
              <div className="h-full bg-[#161625] border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-[#8245ec]/50 transition-all duration-300 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-900">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x225?text=Project+Preview";
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-5 py-2 border border-white/30 rounded-full bg-white/10 text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Restored Full Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-bold bg-[#8245ec]/10 text-[#a374f0] border border-[#8245ec]/20 rounded-full hover:bg-[#8245ec] hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#8245ec] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={20} /> <span>Code</span>
                    </a>

                    {/* Logic: Only show demo link if URL exists and isn't just a placeholder */}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[#8245ec] hover:text-[#a374f0] transition-colors ml-auto"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} /> <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-12 ">
        <a
          href="https://github.com/Pranav-7262"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#161625] border border-gray-800 rounded-full text-lg font-bold text-white transition-all duration-300 hover:border-[#8245ec] hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] overflow-hidden"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

          <Github
            className="group-hover:rotate-12 transition-transform duration-300"
            size={24}
          />
          <span>Check out GitHub for more projects</span>
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform duration-300"
            size={20}
          />
        </a>
      </div>
    </section>
  );
};
