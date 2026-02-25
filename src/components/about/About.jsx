import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import Profile from "../../assets/myPhoto.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
              Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Pranav Varpe
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-[#8245ec]"
                wrapper="span"
              />
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">
              I am a full-stack developer with over 2 years of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and other
              modern technologies to create seamless user experiences and
              efficient solutions.
            </p>
            <a
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={Profile}
                alt="Pranav Varpe"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
