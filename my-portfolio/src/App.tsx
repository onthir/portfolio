// src/App.tsx
import './App.css' // standard vite import

// Define a type for your project data
interface Project {
  title: string;
  description: string;
  link: string;
}

function App() {
  const projects: Project[] = [
    {
      title: "Project Title 1",
      description: "A brief description of what this project does and the tech stack used.",
      link: "#"
    },
    {
      title: "Project Title 2",
      description: "Another cool project showing off your TypeScript skills.",
      link: "#"
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <header>
        <h1>Your Name</h1>
        <p>Developer | Creator | Problem Solver</p>
        <div className="socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </header>

      {/* About Section */}
      <section>
        <h2>About Me</h2>
        <div className="card">
          <p>
            Hello! I am a software engineer building with React and TypeScript.
            [Write a short bio here about your background].
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Code</a>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{textAlign: 'center', marginTop: '4rem', opacity: '0.6'}}>
        <p>&copy; {new Date().getFullYear()} Your Name. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;