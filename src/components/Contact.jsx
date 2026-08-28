import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm always open to internship opportunities, collaborations, and
        interesting projects. Feel free to connect with me!
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
    <p>annmariyajoby2028@cs.sjcetpalai.ac.in</p>
        </div>

        <div className="contact-card">
  <FaLinkedin className="contact-icon" />
  <h3>LinkedIn</h3>
  <a
    href="https://www.linkedin.com/in/ann-mariya-joby-719a17327/"
    target="_blank"
    rel="noreferrer"
  >
    View Profile
  </a>
</div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Annmariyajoby"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Kerala, India</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;