import React, { useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 95, category: "backend" },
  { name: "Express", level: 90, category: "backend" },
  //Database
  { name: "MySQL", level: 90, category: "database" },
  { name: "Mongodb", level: 95, category: "database" },
  { name: "Oracle", level: 90, category: "database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Appwrite", level: 90, category: "tools" },
  { name: "Netlify", level: 90, category: "tools" },
  { name: "Vercel", level: 90, category: "tools" },
  { name: "Prettier", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section
      id="skills"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[#8245ec]">Skills</span>
          <div className="w-37 h-1 bg-purple-500 mx-auto mt-4"></div>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((currCat, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(currCat)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize border border-white/10 ${
                activeCategory === currCat
                  ? "bg-[#8245ec] text-white"
                  : "bg-white/10 hover:bg-white/20 hover:bd-secondary text-white"
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
              className="bg-[#0a0a1a] p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#111122] hover:border hover:border-[#4444ff] "
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
