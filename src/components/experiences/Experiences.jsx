import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      id: "1",
      company: "Tecspeak IT Solutions",
      location: "Sangli, India",
      position: "Full stack Development Intern",
      duration: "June 2025 - July 2025",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "REST APIs",
      ],
      description: [
        "Developed and maintained web applications using the MERN stack, ensuring high performance and scalability.",
        "Built responsive user interfaces and RESTful APIs with robust database integration.",
        "Gained hands-on experience in modern web technologies and full-stack architecture.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8245ec]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
              My professional journey and industry contributions.
            </p>
          </motion.div>
        </div>

        {/* Experiences List */}
        <div className="max-w-4xl mx-auto relative z-10">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-[#161625]/80 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-[#8245ec]/50 transition-all duration-500 group backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8245ec] to-[#ff6b6b] rounded-l-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#8245ec]/10 rounded-2xl text-[#8245ec] group-hover:scale-110 transition-transform duration-300">
                        <Briefcase size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#8245ec] transition-colors">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-[#a374f0] font-semibold">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      <Calendar size={16} className="text-[#ff6b6b]" />
                      <span className="font-bold text-gray-200 uppercase tracking-wider">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <MapPin size={16} className="text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 ml-2 md:ml-12">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1 bg-[#8245ec]/5 border border-[#8245ec]/20 rounded-lg text-xs font-bold text-[#a374f0]"
                    >
                      <Code2 size={12} /> {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-5 ml-2 md:ml-12">
                  {exp.description.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1.5">
                        <CheckCircle2
                          size={20}
                          className="text-[#8245ec] shrink-0"
                        />
                      </div>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
