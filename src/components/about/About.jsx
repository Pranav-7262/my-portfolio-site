import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react"; // Added for a better icon
import Profile from "../../assets/myPhoto.jpeg";

const About = () => {
  const [tiltEnabled, setTiltEnabled] = React.useState(true);

  React.useEffect(() => {
    const check = () => setTiltEnabled(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white overflow-hidden"
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

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-400 mb-2">
              Hi, I am
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight tracking-tighter">
              Pranav Varpe
            </h2>

            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 h-12">
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Backend Specialist",
                  2000,
                  "Third-Year CSE Student",
                  2000,
                  "Open Source Contributor",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-[#8245ec]"
                wrapper="span"
              />
            </div>

            <div className="relative group">
              {/* Glassmorphism card for bio */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative bg-[#161625]/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm mb-10">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  I am a passionate{" "}
                  <span className="text-white font-semibold">
                    Computer Science student
                  </span>{" "}
                  currently in my third year, specializing in the{" "}
                  <span className="text-white font-semibold">MERN stack</span>.
                  With a track record of solving{" "}
                  <span className="text-[#a374f0] font-bold">
                    1000+ problems
                  </span>{" "}
                  on LeetCode and GFG, I enjoy building high-performance backend
                  systems and interactive user experiences. I thrive on turning
                  complex logic into elegant, scalable code.
                </p>
              </div>
            </div>

            {/* Enhanced Download CV Button */}
            <a
              href="/Pranav-Varpe-Resume.pdf"
              download="Pranav-Varpe-Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full text-lg font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,69,236,0.6)] active:scale-95"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          {/* Right Side: Profile Image */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              {/* Rotating background border effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8245ec] via-transparent to-[#ff6b6b] rounded-full animate-spin-slow opacity-30"></div>

              <Tilt
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] z-10"
                tiltEnable={tiltEnabled}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1200}
                scale={1.05}
                transitionSpeed={2000}
              >
                <div className="w-full h-full rounded-full border-[6px] border-[#161625] overflow-hidden shadow-[0_0_50px_rgba(130,69,236,0.3)]">
                  <img
                    src={Profile}
                    alt="Pranav Varpe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
