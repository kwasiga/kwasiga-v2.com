import { useState } from 'react';
import './App.css';
import { FILES, type FileId } from './data/files';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Playlist from './components/Playlist';
import NarutoSeal from './components/NarutoSeal';

type OpenTab = { id: FileId; name: string };

const MINIMAP_LINES = Array.from({ length: 60 }, (_, i) =>
  i === 0 || i === 5 ? 'bright' : i % 7 === 0 ? 'mid' : 'dim'
);

function Minimap() {
  return (
    <div className="minimap">
      {MINIMAP_LINES.map((cls, i) => (
        <div key={i} className={`minimap-line ${cls !== 'dim' ? cls : ''}`} />
      ))}
    </div>
  );
}

export default function App() {
  const [activeFile, setActiveFile] = useState<FileId | null>(null);
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [folderOpen, setFolderOpen] = useState(true);

  function openFile(id: FileId) {
    const file = FILES.find(f => f.id === id)!;
    setActiveFile(id);
    if (!openTabs.find(t => t.id === id)) {
      setOpenTabs(prev => [...prev, { id, name: file.name }]);
    }
  }

  function closeTab(id: FileId, e: React.MouseEvent) {
    e.stopPropagation();
    const next = openTabs.filter(t => t.id !== id);
    setOpenTabs(next);
    if (activeFile === id) {
      setActiveFile(next.length > 0 ? next[next.length - 1].id : null);
    }
  }

  function renderContent() {
    if (!activeFile) {
      return (
        <div className="welcome">
          <NarutoSeal />
          <h2>Hi, I'm Kwasi</h2>
          <p>Select a file from the explorer to get started.</p>
          <div className="welcome-shortcuts">
            <div className="shortcut-row">
            </div>
            <div className="shortcut-row">
              <span>About me</span>
              <span className="kbd">cd ./aboutme</span>
            </div>
            <div className="shortcut-row">
              <span>Projects</span>
              <span className="kbd">cd ./projects</span>
            </div>
            <div className="shortcut-row">
              <span>Experience</span>
              <span className="kbd">cd ./experience</span>
            </div>
          </div>
        </div>
      );
    }
    if (activeFile === 'aboutMe')    return <AboutMe />;
    if (activeFile === 'projects')   return <Projects />;
    if (activeFile === 'experience') return <Experience />;
    if (activeFile === 'playlist')   return <Playlist />;
  }

  const lineCount = activeFile ? (activeFile === 'aboutMe' ? 49 : activeFile === 'projects' ? 58 : 56) : 1;
  const col = activeFile ? 1 : 1;

  return (
    <div className="ide">
      {/* Title Bar */}
      <div className="title-bar">
        <div className="traffic-lights">
          <span className="tl-close" />
          <span className="tl-min" />
          <span className="tl-max" />
        </div>
        <div className="title-bar-center">
          <NarutoSeal size={16} /> &nbsp; kwasiga.com — {activeFile ? FILES.find(f => f.id === activeFile)?.name : 'Welcome'}
        </div>
      </div>

      {/* Main */}
      <div className="main-layout">
        {/* Activity Bar */}
        <div className="activity-bar">
          <button
            className={`activity-icon ${sidebarOpen ? 'active' : ''}`}
            title="Explorer"
            onClick={() => setSidebarOpen(v => !v)}
          >📁</button>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
          <div className="sidebar-header">Explorer</div>
          <div className="file-tree">
            <div className="tree-package">
              <div className="tree-package-label" onClick={() => setFolderOpen(v => !v)}>
                <span>{folderOpen ? '▾' : '▸'}</span>
                <span>kwasiga.com</span>
              </div>
              {folderOpen && FILES.map(file => (
                <div
                  key={file.id}
                  className={`tree-file ${activeFile === file.id ? 'active' : ''}`}
                  onClick={() => openFile(file.id)}
                >
                  <span>{file.icon}</span>
                  <span>{file.name}</span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="editor-pane">
          {/* Tabs */}
          <div className="tab-bar">
            {openTabs.map(tab => (
              <div
                key={tab.id}
                className={`tab ${activeFile === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFile(tab.id)}
              >
                <span>{FILES.find(f => f.id === tab.id)?.icon}</span>
                <span>{tab.name}</span>
                <span
                  className="tab-close"
                  onClick={(e) => closeTab(tab.id, e)}
                >✕</span>
              </div>
            ))}
          </div>

          {/* Content + Minimap */}
          <div className="editor-area">
            <div className="editor-pane">
              {renderContent()}
            </div>
            {activeFile && <Minimap />}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-item" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><NarutoSeal size={14} /> Go</span>
        <span className="status-item">main</span>
        <span className="status-item">kwasiga.com</span>
        <div className="status-right">
<span className="status-item">Ln {lineCount}, Col {col}</span>
          <span className="status-item">UTF-8</span>
          <span className="status-item">go1.23</span>
        </div>
      </div>
    </div>
  );
}
