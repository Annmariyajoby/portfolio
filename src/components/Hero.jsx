import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-content">

        {/* Left Side */}
        <div className="hero-text">

          <h3 data-aos="fade-right">
            HI, I'M
          </h3>

          <h1 data-aos="zoom-in" data-aos-delay="200">
            <span>ANN MARIYA JOBY</span>
          </h1>

          <h2 data-aos="fade-left" data-aos-delay="400">
            Computer Science Engineering Student
          </h2>

          <p data-aos="fade-up" data-aos-delay="600">
            Motivated and passionate B.Tech Computer Science Engineering
            student with a strong interest in technology and software
            development. Skilled in programming languages such as Python,
            C, Java, and SQL with a growing understanding of problem-solving
            and coding fundamentals. Enthusiastic about learning new
            technologies, improving technical skills, and exploring
            opportunities in software development and the IT industry.
            Dedicated, curious, and eager to apply academic knowledge to
            real-world projects and career growth.
          </p>

          {/* Buttons */}
          <div
            className="buttons"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <a href="#projects" className="btn1">
              View Projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}res.pdf`}
              download="Ann_Mariya_Joby_Resume.pdf"
              className="btn2"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn3">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Photo */}
        <div
          className="hero-image"
          data-aos="zoom-in-left"
          data-aos-delay="400"
        >
          <img
            src={`${import.meta.env.BASE_URL}ann.jpeg`}
            alt="Ann Mariya"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;