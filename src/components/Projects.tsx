import { CodeLine, BLANK, fn, str, tx, cyan, teal, lk } from './CodeLine';

const lines = [
  [cyan('$ '), teal('pwd')],
  [tx('/kwasiga.com/projects')],
  BLANK,
  [cyan('$ '), teal('ls'), tx(' -l ./projects/')],
  [tx('total 2 projects')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' go-secure-api.txt')],
  [fn('Name  '), tx(': Go Secure API')],
  BLANK,
  [fn('About '), tx(':')],
  [tx('  A production-ready REST API with:')],
  [tx('  - JWT auth (access + refresh tokens, HS256)')],
  [tx('  - Role-based access control (RBAC)')],
  [tx('  - Per-IP token-bucket rate limiting')],
  [tx('  - PostgreSQL persistence via sqlc')],
  BLANK,
  [fn('Stack '), tx(': '), str('Go  ·  PostgreSQL  ·  sqlc  ·  JWT  ·  bcrypt')],
  BLANK,
  [fn('Links '), tx(': '), lk('GitHub', 'https://github.com/kwasiga/secure-api')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' pawpath.txt')],
  [fn('Name  '), tx(': PawPath — AI Dog Walking App')],
  [fn('Award '), tx(': 🏆 RamHack \'26 · 1st Place in Track')],
  BLANK,
  [fn('About '), tx(':')],
  [tx('  A dog walking app that generates optimized routes and real-time pet care recommendations based on: ')],
  [tx('  - dog breed')],
  [tx('  - local weather')],
  [tx('  - park conditions')],
  BLANK,
  [fn('Stack '), tx(': '), str('FastAPI  ·  Gemini AI  ·  Google Maps  ·  Supabase')],
  [fn('Also  '), tx(': '), str('Python  ·  React  ·  SQL')],
  BLANK,
  [fn('Links '), tx(': '), lk('GitHub', 'https://github.com/kwasiga/pawpath'), fn('  ·  '), lk('Devpost', 'https://devpost.com/software/pawpath?_gl=1*stp8l2*_gcl_au*NzIxOTcxNDQwLjE3NzY2NTY1ODE.*_ga*NTkzNjc3Mzg0LjE3NzY2NTY1ODE.*_ga_0YHJK3Y10M*czE3NzY2NTY1ODEkbzEkZzEkdDE3NzY2NTY1ODkkajUyJGwwJGgw')],
  BLANK,
  BLANK,
  BLANK,
  [cyan('$ '), tx('_')],
];

export default function Projects() {
  return (
    <div className="editor-content fade-in">
      <div className="line-numbers">
        {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
      </div>
      <div className="code-body">
        {lines.map((line, i) => <CodeLine key={i} line={line} />)}
      </div>
    </div>
  );
}
