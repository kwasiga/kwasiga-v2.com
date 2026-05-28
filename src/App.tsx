import './App.css';
import resumePdf from './assets/resume.pdf';

export default function App() {
  return (
    <div className="page">
      <div className="name">Kwasi Gyimah-Asante</div>

      <div className="links">
        <a href="https://linkedin.com/in/kwasiga" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a href="https://github.com/kwasiga" target="_blank" rel="noopener noreferrer">Github</a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>

      <p className="bio">
        Math & CS major @ <a href="https://fordham.edu" target="_blank" rel="noopener noreferrer">Fordham</a>. AI Engingeering, Infra.
      </p>
      <p className="bio-muted">
        Research Assistant in RL @ Fordham.
      </p>

      <div className="section">
        <div className="section-title">Projects</div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/rag-pipeline" target="_blank" rel="noopener noreferrer">Rag Pipeline</a>
            <span className="item-desc">. Production multimodal rag pipeline.</span>
          </span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/pawpath" target="_blank" rel="noopener noreferrer">Pawpath</a>
            <span className="item-desc">. (Won RAMHACK '26 track). AI dog walking + route optimization.</span>
          </span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/Spoty" target="_blank" rel="noopener noreferrer">Spoty</a>
            <span className="item-desc">. Social app with real-time listening activity, listening stats, taste compatibility, and friend reactions.</span>
          </span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/accentr" target="_blank" rel="noopener noreferrer">Accentr</a>
            <span className="item-desc">. Language learning app using AI to help with pronounciations.</span>
          </span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Bio</div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>NY</span>
          
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>Typing in python, js/ts</span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span><a href="mailto:kag7@fordham.edu">kag7@fordham.edu</a></span>
        </div>
      </div>
    </div>
  );
}
