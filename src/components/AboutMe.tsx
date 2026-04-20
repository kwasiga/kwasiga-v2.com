import { CodeLine, BLANK, fn, str, tx, cyan, teal, lk } from './CodeLine';
import resumePdf from '../assets/resume.pdf';

const staticLines = [
  [cyan('$ '), teal('pwd')],
  [tx('/kwasiga.com/aboutMe')],
  BLANK,
  [cyan('$ '), teal('whoami')],
  [tx('Kwasi Gyimah-Asante')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' info.txt')],
  [tx('University  : Fordham University')],
  [tx('Degree      : B.S. Mathematics & Computer Science')],
  [tx('Email       : kwasigyimahasante06@gmail.com')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' bio.txt')],
  [tx('A Math & CS student interested in backend systems, performance, and security. ')],
  [tx('I enjoy picking up new languages and technologies, optimizing things until')],
  [tx('they\'re slightly faster than necessary.')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' interests.txt')],
  [str('Backend Systems'), tx('  ·  '), str('Performance'), tx('  ·  '), str('Security')],
  [str('Infrastructure'),   tx('  ·  '), str('System Design')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' skills.txt')],
  [fn('Go'), tx('  ·  '), fn('Python'), tx('  ·  '), fn('C#'), tx('  ·  '), fn('C++'), tx('  ·  '), fn('Linux'), tx('  ·  '), fn('SQL')],
  BLANK,
  [cyan('$ '), teal('ls'), tx(' ./links/')],
  [tx('  →  '), lk('GitHub ↗', 'https://github.com/kwasiga')],
  [tx('  →  '), lk('LinkedIn ↗', 'https://linkedin.com/in/kwasiga')],
];

export default function AboutMe() {
  const lines = [
    ...staticLines,
    [tx('  →  '), lk('Resume ↗', resumePdf)],
    BLANK,
    [cyan('$ '), tx('_')],
  ];

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
