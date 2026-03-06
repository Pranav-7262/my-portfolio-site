import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-2xl font-medium text-gray-400 mb-2">
              Hi, I am
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight tracking-tighter">
              Pranav Varpe
            </h2>

            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 h-12">
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Node.js Enthusiast",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-[#8245ec]"
                wrapper="span"
              />
            </div>

            <div className="relative group mb-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative bg-[#161625]/50 border border-gray-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  I am a{" "}
                  <span className="text-white font-semibold">
                    Computer Science student
                  </span>{" "}
                  with a strong passion for building modern web applications. I
                  specialize in the{" "}
                  <span className="text-white font-semibold">MERN stack</span>{" "}
                  (MongoDB, Express, React, and Node.js) and enjoy creating
                  efficient, scalable backend solutions combined with responsive
                  user interfaces.
                  <br />
                  My focus lies in writing clean, maintainable code and
                  exploring new technologies to solve real-world problems
                  through software development.
                </p>
              </div>
            </div>

            <a
              href="/Pranav-Varpe-Resume.pdf"
              download="Pranav-Varpe-Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full text-lg font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,69,236,0.6)] active:scale-95 overflow-hidden"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span>DOWNLOAD CV</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-[shine_0.75s]" />
            </a>
          </div>

          {/* Right Side: Profile Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8245ec] via-transparent to-[#ff6b6b] rounded-full animate-spin-slow opacity-30"></div>
              <Tilt
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] z-10"
                tiltEnable={tiltEnabled}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
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
