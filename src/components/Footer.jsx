import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-symbol">&lt;</span>
              <span className="logo-name">Ann Mariya</span>
              <span className="logo-symbol"> /&gt;</span>
            </a>
            <p className="footer-tagline">
              B.Tech Computer Science Engineering Student • St. Joseph's College of Engineering and Technology, Palai.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Quick Links</h4>
            <ul className="footer-nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-nav-title">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://github.com/Annmariyajoby"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ann-mariya-joby-719a17327/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:annmariyajoby2028@cs.sjcetpalai.ac.in"
                aria-label="Email Ann Mariya Joby"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} Ann Mariya Joby. All Rights Reserved.
          </p>
          <p className="footer-credits">
            Built with React, Vite &amp; <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;