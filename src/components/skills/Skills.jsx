import React, { useState } from "react";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  // Programming Languages
  { name: "Java", level: 90, category: "Programming", icon: <FaJava /> },
  { name: "JavaScript", level: 90, category: "Programming", icon: <FaJs /> },
  {
    name: "TypeScript",
    level: 85,
    category: "Programming",
    icon: <SiTypescript />,
  },
  {
    name: "C",
    level: 80,
    category: "Programming",
    icon: <span className="font-bold">C</span>,
  },
  { name: "Python", level: 70, category: "Programming", icon: <FaPython /> },

  // Frontend
  {
    name: "HTML",
    level: 95,
    category: "frontend",
    icon: (
      <>
        <FaHtml5 />
      </>
    ),
  },
  { name: "CSS", level: 95, category: "frontend", icon: <FaCss3 /> },
  { name: "React", level: 95, category: "frontend", icon: <FaReact /> },
  { name: "Redux", level: 90, category: "frontend", icon: <SiRedux /> },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "frontend",
    icon: <SiTailwindcss />,
  },

  // Backend
  { name: "Node.js", level: 95, category: "backend", icon: <FaNodeJs /> },
  { name: "Express.js", level: 90, category: "backend", icon: <SiExpress /> },
  { name: "Redis", level: 75, category: "backend", icon: <SiRedis /> },
  {
    name: "Socket.IO",
    level: 85,
    category: "backend",
    icon: <SiSocketdotio />,
  },
  { name: "Docker", level: 80, category: "backend", icon: <FaDocker /> },

  // Database
  { name: "MySQL", level: 85, category: "database", icon: <SiMysql /> },
  { name: "MongoDB", level: 95, category: "database", icon: <SiMongodb /> },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt /> },
  { name: "Postman", level: 90, category: "tools", icon: <SiPostman /> },
  { name: "Netlify", level: 85, category: "tools", icon: <SiNetlify /> },
  { name: "Vercel", level: 85, category: "tools", icon: <SiVercel /> },
  { name: "Render", level: 80, category: "tools", icon: <SiRender /> },
];

const categories = [
  "all",
  "Programming",
  "frontend",
  "backend",
  "database",
  "tools",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A comprehensive list of the programming languages, frameworks, and
            tools I use to build robust software solutions.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((currCat) => (
            <button
              key={currCat}
              onClick={() => setActiveCategory(currCat)}
              className={`px-6 py-2 rounded-xl transition-all duration-300 capitalize border ${
                activeCategory === currCat
                  ? "bg-[#8245ec] border-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.4)]"
                  : "bg-[#161625] border-gray-800 text-gray-400 hover:border-[#8245ec]/50 hover:text-white"
              }`}
            >
              {currCat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#161625] border border-gray-800 p-6 rounded-2xl hover:border-[#8245ec]/50 transition-all duration-500 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-[#8245ec] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#8245ec] transition-colors">
                {skill.name}
              </h3>

              {/* Progress Bar Container */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-[#a374f0] font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden border border-gray-800">
                  <div
                    className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width:
                        activeCategory === "all" ||
                        skill.category === activeCategory
                          ? `${skill.level}%`
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
