import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "java", label: "Java & Systems" },
    { id: "interactive", label: "Interactive / Games" },
  ];

  const projects = [
    {
      title: "Bank Management System",
      description:
        "A robust banking application built with Java Swing and MySQL, featuring secure authentication, balance inquiries, deposit/withdrawal transactions, fast cash, PIN generation, and administrative account controls.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      category: "java",
      featured: true,
      github: "https://github.com/Annmariyajoby/Bank-Management-System",
      demo: "https://annmariyajoby.github.io/Bank-Management-System/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "An engaging web-based Tic Tac Toe game engineered with vanilla JavaScript. Features dynamic win-state validation, interactive grid animations, turn indicators, and score tracking.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      category: "interactive",
      featured: false,
      github: "https://github.com/Annmariyajoby/tic-tac-toe",
      demo: "https://annmariyajoby.github.io/tic-tac-toe/",
    },
    {
      title: "Bouncing Ball Simulation",
      description:
        "An object-oriented Java graphics simulation that models ball movement and gravity dynamics with real-time vector bouncing and boundary collision detection.",
      tech: ["Java", "OOP", "AWT / Graphics"],
      category: "java",
      featured: false,
      github: "https://github.com/Annmariyajoby/bouncing_ball",
      demo: "https://annmariyajoby.github.io/bouncing_ball/",
    },
    {
      title: "Interactive Calculator",
      description:
        "A responsive calculator web application designed with precision decimal math, keyboard event listeners, clean layout grids, and instant arithmetic feedback.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "web",
      featured: false,
      github: "https://github.com/Annmariyajoby/Calculator",
      demo: "https://annmariyajoby.github.io/Calculator/",
    },
    {
      title: "Responsive Image Gallery",
      description:
        "A curated image showcase web interface with smooth CSS Grid layouts, interactive hover effects, category filtering, and mobile-first responsiveness.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "web",
      featured: false,
      github: "https://github.com/Annmariyajoby/image_gallery",
      demo: "https://annmariyajoby.github.io/image_gallery/",
    },
    {
      title: "Planet Data Explorer",
      description:
        "An educational webpage displaying solar system planetary data, orbital facts, dimensions, and atmospheric statistics styled with modern typography and astronomy themes.",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      category: "web",
      featured: false,
      github: "https://github.com/Annmariyajoby/planet_data",
      demo: "https://annmariyajoby.github.io/planet_data/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="projects-container-wrapper">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of software applications, web experiences, and algorithmic tools I've built.
          </p>

          {/* Project Filter Tabs */}
          <div className="project-filter-group" data-aos="fade-up" data-aos-delay="100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`project-tab-btn ${activeFilter === cat.id ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project, index) => (
            <div
              className={`project-card ${project.featured ? "featured-card" : ""}`}
              key={index}
            >
              {/* Header Badges */}
              <div className="project-card-header">
                {project.featured && (
                  <span className="featured-pill">
                    <FaStar className="star-icon" /> Featured Project
                  </span>
                )}
                <span className="category-pill">{project.category.toUpperCase()}</span>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>

              {/* Tech Stack Pills */}
              <div className="project-tech-tags">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn repo-btn"
                  title="View Source Code on GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                    title="Open Live Preview"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="external-icon" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;