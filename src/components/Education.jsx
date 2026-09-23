import { FaGraduationCap, FaSchool, FaBookOpen, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Education.css";

function Education() {
  const educationTimeline = [
    {
      year: "2024 – 2028",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "St. Joseph's College of Engineering and Technology",
      location: "Palai, Kerala",
      status: "Currently Pursuing (3rd Year)",
      icon: <FaGraduationCap />,
      details: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Software Engineering.",
        "Active member of tech clubs & participating in coding initiatives and hackathons.",
      ],
    },
    {
      year: "2022 – 2024",
      degree: "Higher Secondary Education (Class XII)",
      institution: "Government Higher Secondary School (GHSS)",
      location: "Kamballur, Kerala",
      status: "Completed",
      icon: <FaSchool />,
      details: [
        "Specialized in Science stream with Mathematics and Computer Science.",
        "Built strong foundations in analytical problem solving and mathematics.",
      ],
    },
    {
      year: "2021 – 2022",
      degree: "Secondary School Leaving Certificate (Class X)",
      institution: "St. Mary's High School",
      location: "Cherupuzha, Kerala",
      status: "Completed",
      icon: <FaBookOpen />,
      details: [
        "Completed general secondary curriculum with high academic standing.",
        "Developed early interest in science, computational thinking, and technology.",
      ],
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Educational Journey</h2>
          <p className="section-subtitle">
            My academic foundation and qualifications in Computer Science &amp; Technology.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {educationTimeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Timeline Icon Node */}
              <div className="timeline-node">
                <div className="timeline-icon">{item.icon}</div>
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-meta">
                    <span className="timeline-year">
                      <FaCalendarAlt className="meta-icon" />
                      {item.year}
                    </span>
                    <span
                      className={`timeline-status ${
                        item.status.includes("Pursuing") ? "status-active" : "status-done"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  <div className="timeline-location">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="timeline-details">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;