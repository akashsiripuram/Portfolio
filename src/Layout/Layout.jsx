import "./Layout.css";
import Education from "../components/Education/Education";
import Navbar from "../components/Navbar/Navbar";
import Skill from "../components/Skills/Skill";
import Projects from "../components/projects/Projects";
import Achievements from "../components/Achivements/Achivements";
import ContactForm from "../components/emailJs/ContactForm";
import About from "../components/about/About";

export default function Layout() {
  return (
    <div className="bg-gray-300 w-screen " >
      <Navbar/>
      
      <div id="about">
        <About/>
      </div>
      <div id="education">
        <Education/>
      </div>
      <div id="skills">
        <Skill/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="achievements">
        <Achievements/>
      </div>
      <div id="contact">
        <ContactForm/>
      </div>
    </div>
  );
}
