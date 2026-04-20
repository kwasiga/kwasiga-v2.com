
type Token =
  | { t: 'kw' | 'fn' | 'ty' | 'str' | 'num' | 'cmt' | 'pkg' | 'op' | 'cyan' | 'teal'; v: string }
  | { t: 'text'; v: string }
  | { t: 'link'; v: string; href: string }
  | { t: 'blank' };

export type Line = Token[];

export function CodeLine({ line }: { line: Line }) {
  if (line.length === 1 && line[0].t === 'blank') {
    return <div className="code-line">&nbsp;</div>;
  }
  return (
    <div className="code-line">
      {line.map((tok, i) => {
        if (tok.t === 'blank') return <span key={i}>&nbsp;</span>;
        if (tok.t === 'text') return <span key={i}>{tok.v}</span>;
        if (tok.t === 'link') return (
          <a key={i} href={tok.href} target="_blank" rel="noopener noreferrer" className="terminal-link">
            {tok.v}
          </a>
        );
        return <span key={i} className={tok.t}>{tok.v}</span>;
      })}
    </div>
  );
}

export const BLANK: Line = [{ t: 'blank' }];
export function kw(v: string): Token { return { t: 'kw', v }; }
export function fn(v: string): Token { return { t: 'fn', v }; }
export function ty(v: string): Token { return { t: 'ty', v }; }
export function str(v: string): Token { return { t: 'str', v }; }
export function num(v: string): Token { return { t: 'num', v }; }
export function cmt(v: string): Token { return { t: 'cmt', v }; }
export function pkg(v: string): Token { return { t: 'pkg', v }; }
export function op(v: string): Token { return { t: 'op', v }; }
export function cyan(v: string): Token { return { t: 'cyan', v }; }
export function teal(v: string): Token { return { t: 'teal', v }; }
export function tx(v: string): Token { return { t: 'text', v }; }
export function lk(v: string, href: string): Token { return { t: 'link', v, href }; }
