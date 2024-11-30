import "./Layout.css";
import Education from "../components/Education/Education";
import Navbar from "../components/Navbar/Navbar";
import Skill from "../components/Skills/Skill";
import Projects from "../components/projects/Projects";

export default function Layout() {
  return (
    <div className="bg-gray-300">
      <Navbar/>
    
      <div id="education">
        <Education/>
      </div>
      <div id="skills">
        <Skill/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
    </div>
  );
}
