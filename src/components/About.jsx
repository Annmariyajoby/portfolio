import { FaGraduationCap, FaLaptopCode, FaRocket, FaMapMarkerAlt, FaCheckCircle, FaFilePdf } from "react-icons/fa";
import "./About.css";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "B.Tech in Computer Science & Engineering (2024 – 2028) at SJCET Palai",
    },
    {
      icon: <FaLaptopCode />,
      title: "Core Focus",
      desc: "Software Engineering, Full-Stack Web Development & Object-Oriented Systems",
    },
    {
      icon: <FaRocket />,
      title: "Project Experience",
      desc: "Built 6+ diverse projects from Java enterprise systems to interactive web applications",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location & Status",
      desc: "Kerala, India • Actively seeking software internships and collaborative projects",
    },
  ];

  const focusPoints = [
    "Object-Oriented Programming (Java, C++)",
    "Modern Web Development (React, JavaScript, HTML5, CSS3)",
    "Relational & Document Databases (MySQL, MongoDB, SQL)",
    "Problem Solving, Data Structures & Algorithm Fundamentals",
    "Clean Code, Version Control (Git, GitHub) & UI Design (Figma)",
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know my journey, academic background, and passion for software technology.
          </p>
        </div>

        <div className="about-content">
          {/* Left Column: Narrative */}
          <div className="about-narrative" data-aos="fade-right" data-aos-duration="900">
            <h3 className="about-heading">
              A Dedicated Computer Science Student Crafting Solutions Through Code
            </h3>

            <p className="about-text">
              I am a motivated B.Tech Computer Science and Engineering student at St. Joseph's College of
              Engineering and Technology, Palai. My passion lies in building practical software, exploring
              modern web frameworks, and solving algorithmic problems.
            </p>

            <p className="about-text">
              With a solid foundation in programming languages like Java, Python, C, and JavaScript, along
              with database technologies like MySQL, I enjoy taking ideas from concept to functional code.
              Whether designing interactive user interfaces with React or architecting database-driven
              desktop applications like my Bank Management System, I am driven by curiosity and continuous
              learning.
            </p>

            <div className="about-focus-box">
              <h4 className="focus-title">Key Areas of Focus:</h4>
              <ul className="focus-list">
                {focusPoints.map((point, index) => (
                  <li key={index} className="focus-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-resume-cta">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="Open Ann Mariya Joby's Resume (PDF)"
              >
                <FaFilePdf className="btn-icon" />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Highlight Grid */}
          <div className="about-cards-grid" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            {highlights.map((item, index) => (
              <div key={index} className="about-card">
                <div className="about-card-icon">{item.icon}</div>
                <h4 className="about-card-title">{item.title}</h4>
                <p className="about-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;