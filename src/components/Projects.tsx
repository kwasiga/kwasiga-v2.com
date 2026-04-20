import { CodeLine, BLANK, fn, str, tx, cyan, teal, lk } from './CodeLine';

const lines = [
  [cyan('$ '), teal('pwd')],
  [tx('/kwasiga.com/projects')],
  BLANK,
  [cyan('$ '), teal('ls'), tx(' -l ./projects/')],
  [tx('total 1 project')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' pawpath.txt')],
  [fn('Name     '), tx(': PawPath — AI Dog Walking App')],
  [fn('Award    '), tx(': 🏆 RamHack \'26 · 1st Place in Track')],
  BLANK,
  [fn('About    '), tx(':')],
  [tx('  A dog walking app that generates optimized routes and real-time pet care recommendations based on: ')],
  [tx('  -    dog breed')],
  [tx('  -    local weather')],
  [tx('  -    park conditions')],
  BLANK,
  [fn('Stack    '), tx(': '), str('FastAPI  ·  Gemini AI  ·  Google Maps  ·  Supabase')],
  [fn('Also     '), tx(': '), str('Python  ·  React  ·  SQL')],
  BLANK,
  [fn('Links    '), tx(':')],
  [tx('  →  '), lk('GitHub ↗', 'https://github.com/kwasiga/pawpath')],
  [tx('  →  '), lk('Devpost ↗', 'https://devpost.com/software/pawpath?_gl=1*stp8l2*_gcl_au*NzIxOTcxNDQwLjE3NzY2NTY1ODE.*_ga*NTkzNjc3Mzg0LjE3NzY2NTY1ODE.*_ga_0YHJK3Y10M*czE3NzY2NTY1ODEkbzEkZzEkdDE3NzY2NTY1ODkkajUyJGwwJGgw')],
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
