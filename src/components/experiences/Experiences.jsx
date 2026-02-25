import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      company: "Tecspeak IT Solutions",
      location: "Sangli, India",
      position: "Full stack Development Intern",
      duration: "June 2025 - July 2025",
      description: [
        "Developed and maintained web applications using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
        "Built responsive user interfaces and RESTful APIs with robust database integration.",
        "Gained hands-on experience in full-stack development and modern web technologies.",
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A summary of my professional journey and hands-on industry
            experience.
          </p>
        </div>

        {/* Experiences List */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-[#161625] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-[#8245ec]/50 transition-all duration-500 group"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8245ec] to-[#ff6b6b] rounded-l-3xl opacity-50"></div>

              <div className="flex flex-col gap-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#8245ec]/10 rounded-lg text-[#8245ec]">
                        <Briefcase size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#8245ec] transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <h4 className="text-xl text-gray-300 font-medium ml-12">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-400 ml-12 md:ml-0">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#ff6b6b]" />
                      <span className="font-semibold text-[#8245ec] uppercase tracking-wider">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description Points */}
                <div className="space-y-4 mt-4 ml-2 md:ml-12">
                  {exp.description.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#8245ec] mt-1 shrink-0"
                      />
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
