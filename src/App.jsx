import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Education } from "./components/education/Education";
import Experiences from "./components/experiences/Experiences";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="bg-[#0a0a0a]">
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experiences />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
