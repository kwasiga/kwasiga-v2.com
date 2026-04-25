import './App.css';
import resumePdf from './assets/resume.pdf';

export default function App() {
  return (
    <div className="page">
      <div className="name">kwasi gyimah-asante</div>

      <div className="links">
        <a href="https://linkedin.com/in/kwasiga" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="https://github.com/kwasiga" target="_blank" rel="noopener noreferrer">github</a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">resume</a>
      </div>

      <p className="bio">
        math & cs student @ <a href="https://fordham.edu" target="_blank" rel="noopener noreferrer">fordham</a>. backend systems, performance, security.
      </p>
      <p className="bio-muted">
        prev intern @ <a href="https://www.persol.com.gh" target="_blank" rel="noopener noreferrer">persol systems</a>.
      </p>

      <div className="section">
        <div className="section-title">projects</div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/secure-api" target="_blank" rel="noopener noreferrer">go secure api</a>
            <span className="item-desc">. production rest api with jwt, rbac, rate limiting.</span>
          </span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>
            <a href="https://github.com/kwasiga/pawpath" target="_blank" rel="noopener noreferrer">pawpath</a>
            <span className="item-desc">. (won ramhack '26 track). ai dog walking + route optimization.</span>
          </span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">bio</div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>ny</span>
          
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span>typing in go, python, c++, js</span>
        </div>
        <div className="item">
          <span className="item-dash">–</span>
          <span><a href="mailto:kag7@fordham.edu">kag7@fordham.edu</a></span>
        </div>
      </div>
    </div>
  );
}
