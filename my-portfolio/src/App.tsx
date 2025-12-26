import { Github, Linkedin, Mail, Youtube, Code2, ExternalLink, Terminal, PlayCircle } from 'lucide-react';
import './index.css';

function App() {
  const projects = [
    {
      title: "Splitey",
      description: "A mobile application for andriod and IOS for splitting expenses among friends.",
      tech: ["React Native", "Django", "PostgreSQL", "Docker", "Firebase"],
      link: "#"
    },
    {
      title: "Classk",
      description: "An educational platform helping new developers understand algorithms through visualization. Born from my YouTube teaching experience.",
      tech: ["TypeScript", "Next.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Gharbar",
      description: "A fun side project utilizing OpenAI's API to generate comedy scripts based on tech industry tropes.",
      tech: ["OpenAI API", "React", "Vite"],
      link: "#"
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <header>
        <div className="role-badge">Full Stack Software Engineer</div>
        <h1>Bibek Bhandari</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Building digital products with 3 years of professional experience. 
          I blend technical precision with creative storytelling.
        </p>

        <div className="social-bar">
          <a target='_blank' href="https://github.com/onthir" className="social-btn"><Github size={20} /></a>
          <a target='_blank' href="https://linkedin.com/in/bhandarib" className="social-btn"><Linkedin size={20} /></a>
          <a target='_blank' href="https://youtube.com/onthir" className="social-btn"><Youtube size={20} /></a>
          <a target='_blank' href="mailto:bibekpro13@gmail.com" className="social-btn"><Mail size={20} /></a>
        </div>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title"><Terminal size={24} /> About Me</h2>
        <div className="glass-card">
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            I am a Full Stack Engineer based in the US. For the past 3 years, I've been shipping production code and solving complex problems. 
            <br /><br />
            But my love for tech goes beyond the 9-to-5. For over <strong>10 years</strong>, I've been running a YouTube channel where I teach programming concepts and produce creative skits. Software engineering isn't just my job—it's my favorite hobby.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="section-title"><Code2 size={24} /> Featured Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div className="glass-card" key={index}>
              <h3 style={{ marginTop: 0, fontSize: '1.25rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <a href={project.link} className="btn-link">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube / Content Section */}
      <section style={{ marginTop: '4rem' }}>
        <h2 className="section-title"><PlayCircle size={24} /> Content Creation</h2>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 style={{ marginTop: 0 }}>10 Years of Storytelling</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              From tutorials to tech comedy, I believe in making programming accessible and fun. 
              Check out my latest videos on the channel.
            </p>
            <a target='_blank' href="https://youtube.com/onthir" className="btn-link">Visit Channel <ExternalLink size={16} /></a>
          </div>
          {/* Visual decoration for the YouTube section */}
          <div style={{ 
            width: '120px', 
            height: '120px', 
            background: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)', 
            borderRadius: '24px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 10px 20px rgba(255, 94, 98, 0.3)'
          }}>
            <PlayCircle size={48} color="white" />
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--text-muted)', opacity: 0.7 }}>
        <p>© {new Date().getFullYear()} Bibek Bhandari. Crafted with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App