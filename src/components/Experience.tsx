import { CodeLine, BLANK, fn, str, tx, cyan, teal } from './CodeLine';

const lines = [
  [cyan('$ '), teal('pwd')],
  [tx('/kwasiga.com/experience')],
  BLANK,
  [cyan('$ '), teal('ls'), tx(' -l ./experience/')],
  [tx('total 1 position')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' persol-systems.txt')],
  [fn('Company  '), tx(': Persol Systems Limited')],
  [fn('Location '), tx(': Accra, Ghana')],
  [fn('Role     '), tx(': Software Engineer Intern')],
  [fn('Period   '), tx(': May – Aug 2021')],
  [fn('About    '), tx(': Enterprise HR & payroll platform, 260+ client organizations across West Africa')],
  BLANK,
  [fn('What I did:')],
  [tx('  →  Built REST API endpoints for employee records')],
  [tx('  →  Worked on payroll processing & DB interactions')],
  [tx('  →  Contributed to a platform at real production scale')],
  BLANK,
  [fn('Stack    '), tx(': '), str('.NET  ·  C#  ·  Python  ·  SQL')],
  BLANK,
  [cyan('$ '), tx('_')],
];

export default function Experience() {
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
