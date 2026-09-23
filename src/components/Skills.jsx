import { useState } from "react";
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
  FaCode,
} from "react-icons/fa";
import {
  SiPython,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Languages & Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools & Design" },
  ];

  const skillsData = [
    // Frontend
    { name: "HTML5", icon: <FaHtml5 />, category: "frontend", color: "#E34F26", type: "Markup" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "frontend", color: "#1572B6", type: "Styling" },
    { name: "JavaScript", icon: <FaJs />, category: "frontend", color: "#F7DF1E", type: "Language" },
    { name: "React", icon: <FaReact />, category: "frontend", color: "#61DAFB", type: "Library" },

    // Languages & Backend
    { name: "Java", icon: <FaJava />, category: "backend", color: "#f89820", type: "OOP & Systems" },
    { name: "Python", icon: <SiPython />, category: "backend", color: "#3776AB", type: "Scripting & DSA" },
    { name: "C", icon: <span className="c-text-icon">C</span>, category: "backend", color: "#00599C", type: "Low-level & Algorithms" },
    { name: "Node.js", icon: <FaNodeJs />, category: "backend", color: "#68A063", type: "Runtime" },

    // Database
    { name: "MySQL", icon: <SiMysql />, category: "database", color: "#00758F", type: "Relational DB" },
    { name: "SQL", icon: <FaDatabase />, category: "database", color: "#3B82F6", type: "Query Language" },
    { name: "MongoDB", icon: <SiMongodb />, category: "database", color: "#47A248", type: "NoSQL DB" },

    // Tools & Design
    { name: "Git", icon: <FaGitAlt />, category: "tools", color: "#F05032", type: "Version Control" },
    { name: "GitHub", icon: <FaGithub />, category: "tools", color: "#8b5cf6", type: "Collaboration" },
    { name: "VS Code", icon: <FaCode />, category: "tools", color: "#007ACC", type: "IDE" },
    { name: "Figma", icon: <FaFigma />, category: "tools", color: "#F24E1E", type: "UI/UX Design" },
    { name: "Canva", icon: <FaPalette />, category: "tools", color: "#00C4CC", type: "Visual Design" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies, programming languages, and developer tools I leverage to build projects.
          </p>

          {/* Filter Pills */}
          <div className="skills-filter-group" data-aos="fade-up" data-aos-delay="100">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-item-card"
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill-icon-wrap" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <span className="skill-type">{skill.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;