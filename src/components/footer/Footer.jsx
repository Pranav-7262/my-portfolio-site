import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Pranav{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Varpe
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>

          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Education", id: "education" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-[#8245ec] text-sm sm:text-base transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center space-x-4 mb-6">
            {[
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/pranav-varpe-08516029b/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/_pranav.varpe/",
              },
              { icon: <FaYoutube />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#8245ec] transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © 2025 Pranav Varpe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
