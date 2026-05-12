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
        Math & CS major @ <a href="https://fordham.edu" target="_blank" rel="noopener noreferrer">Fordham</a>. Distributed systems, Infra, Security.
      </p>
      <p className="bio-muted">
        Prev intern @ <a href="https://www.persol.com.gh" target="_blank" rel="noopener noreferrer">Persol Systems</a>.
      </p>

      <div className="section">
        <div className="section-title">Projects</div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/secure-api" target="_blank" rel="noopener noreferrer">Go Secure API</a>
            <span className="item-desc">. Production rest api with jwt, rbac, rate limiting.</span>
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
            <span className="item-desc">. social app with real-time listening activity, listening stats, taste compatibility, and friend reactions.</span>
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
          <span>Typing in js, go, python, c++</span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span><a href="mailto:kag7@fordham.edu">kag7@fordham.edu</a></span>
        </div>
      </div>
    </div>
  );
}
