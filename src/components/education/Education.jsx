import React from "react";
import Tilt from "react-parallax-tilt";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Sharad Institute Of Technology College of Engineering",
    degree: "Bachelor of Computer Science and Engineering (Persuing)",
    duration: "Aug 2023 - May 2027",
    location: "Ichalkaranji, India",
    score: "8.76 CGPA",
    details:
      "Focusing on full-stack development and backend programming with Node.js and MongoDB.",
    achievements: "Secured 3rd rank in First Year and 7th rank in Second Year.",
  },
  {
    id: 2,
    institution: "Main Rajaram Jr. College, Kolhapur",
    degree: "Higher Secondary Education",
    duration: "June 2022 - March 2023",
    location: "Kolhapur, India",
    score: "65.67%",
    details: "Core science focus with a foundation in mathematics and physics.",
    achievements: null,
  },
  {
    id: 3,
    institution: "R.B. Patil Vidyalaya, Sadoli Khalsa",
    degree: "Secondary Education",
    duration: "June 2020 - June 2021",
    location: "Kolhapur, India",
    score: "88.20%",
    details: "Foundational schooling with strong academic standing.",
    achievements: null,
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Education{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent underline decoration-[#8245ec]/30 underline-offset-8">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            My academic path and milestones
          </p>
        </div>

        {/* Timeline Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[80%] w-0.5 bg-gradient-to-b from-[#8245ec] via-[#ff6b6b] to-transparent hidden md:block top-40"></div>

        {/* Vertical Cards List */}
        <div className="space-y-12 relative">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Spacer for Desktop */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#161625] border-4 border-[#8245ec] z-20 items-center justify-center shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Card Container */}
              <div className="w-full md:w-[45%]">
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1200}
                  scale={1.02}
                  transitionSpeed={800}
                >
                  <div className="relative bg-[#161625] border border-gray-800 rounded-3xl p-6 md:p-8 group hover:border-[#8245ec] transition-all duration-500 shadow-2xl">
                    {/* Glow Effect Layer */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                    <div className="relative z-10">
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8245ec]/20 rounded-full text-[#a374f0] text-xs font-bold mb-4">
                        <Calendar size={14} />
                        {edu.duration}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-[#ff6b6b] font-medium mb-4 flex items-center gap-2">
                        <GraduationCap size={18} /> {edu.degree}
                      </p>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <MapPin size={14} className="text-gray-500" />
                        {edu.location}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-[#8245ec]/30 pl-4 italic">
                        "{edu.details}"
                      </p>

                      {/* Score and Achievement Footer */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-800">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-white/5 rounded-lg">
                            <span className="text-xs text-gray-500 block uppercase font-bold">
                              Score
                            </span>
                            <span className="text-lg font-black text-white">
                              {edu.score}
                            </span>
                          </div>
                        </div>

                        {edu.achievements && (
                          <div className="flex items-center gap-2 text-[#a374f0] text-xs font-bold bg-[#8245ec]/10 px-3 py-2 rounded-xl">
                            <Award size={16} />
                            Rank Holder
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
