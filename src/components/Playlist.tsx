import { CodeLine, BLANK, str, tx, cyan, teal, lk } from './CodeLine';

export interface Song {
  title: string;
  artist: string;
  id: string;
}

export const SONGS: Song[] = [
  { title: 'Last Heartbreak Song',                artist: 'Ayra Starr, Giveon',               id: '1A1ifX8sWzelNpkL5PxcHT' },
  { title: 'How I Met My Ex',                     artist: 'Dave',                             id: '2nO7YG8CFXSZOpvxSFUzgJ' },
  { title: 'Starlight',                           artist: 'Dave',                             id: '531KGXtBroSrOX9LVmiIgc' },
  { title: 'Both Sides Of A Smile',               artist: 'Dave, James Blake',                id: '3hX0ilh84w2KGaiNw2rRCV' },
  { title: 'Set Fire to the Rain',                artist: 'Adele',                            id: '3di5hcvxxciiqwMH1jarhY' },
  { title: 'Raindance',                           artist: 'Dave, Tems',                       id: '3oTuTpF1F3A7rEC6RKsMRz' },
  { title: "Marvins Room",                        artist: 'Drake',                            id: '047fCsbO4NdmwCBn8pcUXl' },
  { title: 'BIRDS OF A FEATHER',                  artist: 'Billie Eilish',                    id: '6dOtVTDdiauQNBQEDOtlAB' },
  { title: 'Baby (Is it a Crime)',                artist: 'Rema',                             id: '6NOrpcicPUh2eaj8bAD44u' },
  { title: 'SYRUP SIPPIN',                        artist: 'Destroy Lonely',                   id: '4pRSB29OrjW4P7Q5fOT18'  },
  { title: 'Ordinary',                            artist: 'Alex Warren',                      id: '2RkZ5LkEzeHGRsmDqKwmaJ' },
  { title: 'Opposite',                            artist: 'Don Toliver',                      id: '3Y1ZpXS4HETFHDdBNfNU0I' },
  { title: 'I Know What You Did Last Summer',     artist: 'Shawn Mendes, Camila Cabello',     id: '2GyA33q5rti5IxkMQemRDH' },
  { title: 'Secondhand',                          artist: 'Don Toliver, Rema',                id: '4Z5KKoBGxpJo8YbDcGQXd5' },
  { title: 'Risk It All',                         artist: 'Bruno Mars',                       id: '5y2ijHECwFYWqcAHKTZgzD' },
  { title: 'YUKON',                               artist: 'Justin Bieber',                    id: '29iva9idM6rFCPUlu7Rhxl' },
];
const url = (id: string) => `https://open.spotify.com/track/${id}`;

const lines = [
  [cyan('$ '), teal('pwd')],
  [tx('/kwasiga.com/playlist')],
  BLANK,
  [cyan('$ '), teal('cat'), tx(' currentlyListeningTo.txt'), tx(`  # ${SONGS.length} songs`)],
  ...SONGS.map((song, i) => {
    const num = String(i + 1).padStart(3, ' ') + '.';
    return [tx(`${num}  `), lk(song.title, url(song.id)), tx('  —  '), str(song.artist)];
  }),
  BLANK,
  [cyan('$ '), teal('echo'), tx(' $MOOD')],
  [str('"writing code and zoning out"')],
  BLANK,
  [cyan('$ '), tx('_')],
];

export default function Playlist() {
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
