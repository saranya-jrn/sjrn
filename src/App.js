import "./App.css";
import Skillsets from "./components/Skillsets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-content">
          <h1>Hello, I'm Saranya</h1>
          <h2>Front-End Engineer</h2>
          <p className="hero-subtitle">
            Building beautiful and responsive web experiences
          </p>
          <p className="location">Based in Atlanta, GA</p>

          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>
            <a href="#contact" className="secondary-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I'm a passionate front-end developer focused on creating intuitive
            and performant web applications.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>My Skills</h2>
          <Skillsets />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          {/* Add your Projects component here */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Let's Connect</h2>
          <div className="contact-links">
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a> */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:saranya.jrn@gmail.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
