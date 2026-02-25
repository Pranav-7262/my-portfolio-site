import React, { useState } from "react";

const skills = [
  //Programming Languages
  { name: "Java", level: 90, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "TypeScript", level: 90, category: "Programming" },
  { name: "C", level: 80, category: "Programming" },
  { name: "Python", level: 70, category: "Programming" },

  //Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Redux", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 95, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "Redis", level: 80, category: "backend" },
  { name: "Websockets", level: 80, category: "backend" },
  { name: "Docker", level: 85, category: "backend" },
  //Database
  { name: "MySQL", level: 90, category: "database" },
  { name: "Mongodb", level: 95, category: "database" },
  { name: "Oracle", level: 90, category: "database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Appwrite", level: 90, category: "tools" },
  { name: "Netlify", level: 90, category: "tools" },
  { name: "Vercel", level: 90, category: "tools" },
  { name: "Prettier", level: 95, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "Render", level: 80, category: "tools" },
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
            My{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((currCat, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(currCat)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize border border-white/10 ${
                activeCategory === currCat
                  ? "bg-[#8245ec] text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {currCat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-[#161625] p-5 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#1a1a2e] hover:border hover:border-[#8245ec]/50"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#8245ec] h-1.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
