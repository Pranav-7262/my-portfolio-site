import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="bg-[#050414]">
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
