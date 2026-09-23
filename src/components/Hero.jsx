import { FaArrowRight, FaFilePdf, FaEnvelope, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for Opportunities & Internships</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Ann Mariya Joby</span>
          </h1>

          <h2 className="hero-subtitle">
            Computer Science Engineering Student &amp; Aspiring Software Developer
          </h2>

          <p className="hero-description">
            Passionate B.Tech Computer Science Engineering student at St. Joseph's College of Engineering
            and Technology, Palai. Enthusiastic about creating interactive web applications, solving
            algorithmic challenges in Java &amp; Python, and designing clean digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FaArrowRight className="btn-icon" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              title="View Ann Mariya Joby's Resume (PDF)"
            >
              <FaFilePdf className="btn-icon" />
              <span>Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <FaEnvelope className="btn-icon" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Strip */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links">
              <a
                href="https://github.com/Annmariyajoby"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-pill"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ann-mariya-joby-719a17327/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-pill"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:annmariyajoby2028@cs.sjcetpalai.ac.in"
                aria-label="Send Email"
                className="social-pill"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & Floating Card */}
        <div className="hero-visual" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="image-wrapper">
            <div className="image-aura"></div>
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Ann Mariya Joby"
              className="profile-img"
              onError={(e) => {
                // If profile.jpeg fails to load, gracefully hide or fallback
                e.target.style.display = 'block';
              }}
            />
            {/* Floating Info Pill */}
            <div className="floating-badge">
              <div className="floating-icon">
                <FaCode />
              </div>
              <div className="floating-text">
                <span className="floating-title">B.Tech CSE</span>
                <span className="floating-desc">2024 – 2028</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;