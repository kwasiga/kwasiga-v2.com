import './App.css';
import resumePdf from './assets/resume.pdf';

export default function App() {
  return (
    <div className="page">
      <div className="name">Kwasi Gyimah-Asante</div>

      <div className="links">
        <a href="https://linkedin.com/in/kwasiga" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="https://github.com/kwasiga" target="_blank" rel="noopener noreferrer">github</a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>

      <p className="bio">
        Math & CS major @ <a href="https://fordham.edu" target="_blank" rel="noopener noreferrer">fordham</a>. distributed systems, performance, security.
      </p>
      <p className="bio-muted">
        Prev intern @ <a href="https://www.persol.com.gh" target="_blank" rel="noopener noreferrer">Persol Systems</a>.
      </p>

      <div className="section">
        <div className="section-title">projects</div>
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
            <span className="item-desc">. (won RAMHACK '26 track). AI dog walking + route optimization.</span>
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
