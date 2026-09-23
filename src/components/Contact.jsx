import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "annmariyajoby2028@cs.sjcetpalai.ac.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link with encoded parameters
    const mailtoSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : "Portfolio Inquiry from " + formData.name
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: emailAddress,
      action: (
        <button
          className="copy-email-btn"
          onClick={handleCopyEmail}
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <FaCheck className="copy-icon" /> <span>Copied!</span>
            </>
          ) : (
            <>
              <FaCopy className="copy-icon" /> <span>Copy Email</span>
            </>
          )}
        </button>
      ),
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Ann Mariya Joby",
      action: (
        <a
          href="https://www.linkedin.com/in/ann-mariya-joby-719a17327/"
          target="_blank"
          rel="noopener noreferrer"
          className="card-action-link"
        >
          Connect on LinkedIn &rarr;
        </a>
      ),
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/Annmariyajoby",
      action: (
        <a
          href="https://github.com/Annmariyajoby"
          target="_blank"
          rel="noopener noreferrer"
          className="card-action-link"
        >
          Follow on GitHub &rarr;
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kerala, India",
      action: <span className="location-badge">Open to Remote &amp; On-Site</span>,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm currently seeking internship opportunities, collaborative projects, and mentorship.
            Drop a message or reach out directly!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-cards-container" data-aos="fade-right" data-aos-duration="900">
            {contactCards.map((card, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-card-icon">{card.icon}</div>
                <div className="contact-card-content">
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-value">{card.value}</p>
                  <div className="card-action-slot">{card.action}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">
              Fill out the form below to open your email client with your message prepared.
            </p>

            {formSubmitted && (
              <div className="form-success-banner">
                <FaCheck />
                <span>Thank you! Your mail client has been opened to send your inquiry.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. jane@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message or inquiry here..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                <span>Send Message</span>
                <FaPaperPlane className="submit-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;