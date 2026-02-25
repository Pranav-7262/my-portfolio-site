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
      "Currently focusing on full-stack development and backend programming with a strong foundation in Node.js and MongoDB.",
    achievements:
      "Secured 3rd rank in First Year and 7th rank in Second Year of Computer Science & Engineering.",
  },
  {
    id: 2,
    institution: "Main Rajaram Jr. College, Kolhapur",
    degree: "Higher Secondary Education",
    duration: "June 2022 - March 2023",
    location: "Kolhapur, India",
    score: "65.67%",
    details:
      "Completed secondary education with a focus on core science subjects.",
    achievements: null,
  },
  {
    id: 3,
    institution: "R.B. Patil Vidyalaya, Sadoli Khalsa",
    degree: "Secondary Education",
    duration: "June 2020 - June 2021",
    location: "Kolhapur, India",
    score: "88.20%",
    details: "Foundation schooling with excellent academic performance.",
    achievements: null,
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full"></div>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu) => (
            <Tilt
              key={edu.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.01}
              transitionSpeed={500}
            >
              <div className="bg-[#161625] border border-gray-800 rounded-2xl p-6 md:p-10 group hover:border-[#8245ec]/50 transition-all duration-300 shadow-xl relative overflow-hidden">
                {/* Visual Flair: Large faint icon in background */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
                  <GraduationCap size={200} />
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#8245ec]/10 rounded-xl text-[#8245ec]">
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-[#8245ec] transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <p className="text-[#a374f0] font-medium">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#ff6b6b]" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#ff6b6b]" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
                      {edu.details}
                    </p>

                    {edu.achievements && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8245ec]/10 border border-[#8245ec]/20 rounded-lg">
                        <Award size={18} className="text-[#ffb84d]" />
                        <span className="text-sm font-medium text-gray-200">
                          {edu.achievements}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Score Tag */}
                  <div className="md:text-right">
                    <div className="inline-block bg-gradient-to-br from-[#1c0f40] to-[#2d1b69] border border-gray-700 rounded-2xl px-6 py-3 text-center min-w-[140px]">
                      <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">
                        Grade / Score
                      </span>
                      <span className="text-2xl font-black text-white">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
