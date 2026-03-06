import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  SiJsonwebtokens,
  SiLinux,
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
    icon: <span className="text-xl font-black">C</span>,
  },
  { name: "Python", level: 70, category: "Programming", icon: <FaPython /> },

  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: <FaHtml5 /> },
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
  {
    name: "JWT Auth",
    level: 90,
    category: "backend",
    icon: <SiJsonwebtokens />,
  },

  // Database
  { name: "MySQL", level: 85, category: "database", icon: <SiMysql /> },
  { name: "MongoDB", level: 95, category: "database", icon: <SiMongodb /> },

  // Tools & DevOps
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt /> },
  { name: "Docker", level: 80, category: "tools", icon: <FaDocker /> },
  { name: "Postman", level: 90, category: "tools", icon: <SiPostman /> },
  { name: "Linux", level: 75, category: "tools", icon: <SiLinux /> },
  { name: "Vercel/Netlify", level: 85, category: "tools", icon: <SiVercel /> },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Technical{" "}
              <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>

        {/* Categories Filter (Mobile Friendly Scroll) */}
        <div className="flex overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:justify-center gap-3 mb-12 scrollbar-hide">
          {categories.map((currCat) => (
            <button
              key={currCat}
              onClick={() => setActiveCategory(currCat)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 capitalize border text-sm font-bold ${
                activeCategory === currCat
                  ? "bg-[#8245ec] border-[#8245ec] text-white shadow-[0_0_20px_rgba(130,69,236,0.3)]"
                  : "bg-[#161625] border-gray-800 text-gray-400 hover:border-[#8245ec]/50"
              }`}
            >
              {currCat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#161625] border border-gray-800 p-6 rounded-2xl hover:border-[#8245ec]/50 transition-colors"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#8245ec]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-5">
                  <div className="text-3xl text-[#8245ec] group-hover:drop-shadow-[0_0_8px_rgba(130,69,236,0.8)] transition-all">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 tracking-tighter uppercase px-2 py-1 bg-black/30 rounded-md">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-medium">
                      Proficiency
                    </span>
                    <span className="text-[#a374f0] font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-gray-800/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] h-full rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
