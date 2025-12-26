// src/App.tsx
import './index.css'

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

function App() {
  // You can easily add more projects here later
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React, TypeScript, and Vite deployed on GitHub Pages.",
      tech: ["React", "TypeScript", "Vite"],
      link: "https://github.com/YOUR_USERNAME/portfolio" 
    },
    {
      title: "Example App",
      description: "A placeholder for your next big project. Maybe a dashboard, a game, or a useful utility script.",
      tech: ["Python", "React", "API"],
      link: "#"
    }
  ];

  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <p className="subtitle">Software Engineer | Creative Thinker</p>
        
        <div className="social-links">
          {/* Update these links with your actual URLs */}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <div className="card">
          <p>
            Welcome to my digital garden. I enjoy building software that solves real problems.
            I specialize in React and TypeScript, but I'm always exploring new technologies.
            When I'm not coding, you can find me [mention a hobby here].
          </p>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="btn">
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Built with React & TypeScript</p>
      </footer>
    </div>
  )
}

export default App