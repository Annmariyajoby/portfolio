import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFigma,
  FaPalette,
} from "react-icons/fa";

import {
  SiPython,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import {
  FaCode,
} from "react-icons/fa";
function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      {/* Frontend */}
      <h3 className="category">🌐 Frontend</h3>

      <div className="skills-container">

        <div className="skill-card">
          <FaHtml5 className="icon html" />
          <h4>HTML5</h4>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon css" />
          <h4>CSS3</h4>
        </div>

        <div className="skill-card">
          <FaJs className="icon js" />
          <h4>JavaScript</h4>
        </div>

        <div className="skill-card">
          <FaReact className="icon react" />
          <h4>React</h4>
        </div>

      </div>

      {/* Backend */}
      <h3 className="category">⚙️ Backend</h3>

      <div className="skills-container">

        <div className="skill-card">
          <FaNodeJs className="icon node" />
          <h4>Node.js</h4>
        </div>

      </div>

      {/* Database */}
      <h3 className="category">🗄️ Database</h3>

      <div className="skills-container">

        <div className="skill-card">
          <SiMysql className="icon mysql" />
          <h4>MySQL</h4>
        </div>

        <div className="skill-card">
          <SiMongodb className="icon mongo" />
          <h4>MongoDB</h4>
        </div>

        <div className="skill-card">
          <FaDatabase className="icon database" />
          <h4>SQL</h4>
        </div>

      </div>

      {/* Programming */}
      <h3 className="category">💻 Programming</h3>

      <div className="skills-container">

        <div className="skill-card">
          <FaJava className="icon java" />
          <h4>Java</h4>
        </div>

        <div className="skill-card">
          <SiPython className="icon python" />
          <h4>Python</h4>
        </div>

        <div className="skill-card">
          <h1 className="icon c">C</h1>
          <h4>C</h4>
        </div>

      </div>

      {/* Tools */}
      <h3 className="category">🛠️ Tools</h3>

      <div className="skills-container">

        <div className="skill-card">
          <FaGitAlt className="icon git" />
          <h4>Git</h4>
        </div>

        <div className="skill-card">
          <FaGithub className="icon github" />
          <h4>GitHub</h4>
        </div>

        <div className="skill-card">
  <FaCode className="icon vscode" />
  <h4>VS Code</h4>
</div>

        <div className="skill-card">
          <FaFigma className="icon figma" />
          <h4>Figma</h4>
        </div>

        <div className="skill-card">
          <FaPalette className="icon canva" />
          <h4>Canva</h4>
        </div>

      </div>

    </section>
  );
}

export default Skills;