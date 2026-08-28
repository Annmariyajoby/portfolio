import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Bouncing Ball",
      description:
        "A Java application that simulates a bouncing ball using object-oriented programming concepts.",
      tech: ["Java"],
      github: "https://github.com/Annmariyajoby/bouncing_ball",
      demo: "https://annmariyajoby.github.io/bouncing_ball/",
    },

    {
      title: "Mozilla Splash Page",
      description:
        "A responsive splash page created as part of the MDN Web Docs HTML and CSS learning project. It demonstrates semantic HTML, responsive images, embedded video, and modern page layout techniques.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Annmariyajoby/mozilla-splash-page",
      demo: "https://annmariyajoby.github.io/mozilla-splash-page/",
    },

    {
      title: "Image Gallery",
      description:
        "A responsive image gallery built using HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Annmariyajoby/image_gallery",
      demo: "https://annmariyajoby.github.io/image_gallery/",
    },

    {
      title: "Planet Data",
      description:
        "A responsive webpage displaying information about planets using HTML and CSS.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Annmariyajoby/planet_data",
      demo: "https://annmariyajoby.github.io/planet_data/",
    },

    {
      title: "Bank Management System",
      description:
        "A Java Swing and MySQL-based banking application that provides secure account management, deposits, withdrawals, balance enquiry, fast cash, PIN change, mini statements, and an admin dashboard.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/Annmariyajoby/Bank-Management-System",
      demo: "https://annmariyajoby.github.io/Bank-Management-System/",
    },

    {
      title: "Tic Tac Toe",
      description:
        "Classic Tic Tac Toe game developed with JavaScript featuring interactive gameplay.",
      tech: ["JavaScript"],
      github: "https://github.com/Annmariyajoby/tic-tac-toe",
      demo: "https://annmariyajoby.github.io/tic-tac-toe/",
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
      data-aos="fade-up"
    >
      <h2 data-aos="zoom-in">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 150}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;