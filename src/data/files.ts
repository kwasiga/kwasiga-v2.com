export type FileId = 'aboutMe' | 'projects' | 'experience';

export interface GoFile {
  id: FileId;
  name: string;
  icon: string;
}

export const FILES: GoFile[] = [
  { id: 'aboutMe',    name: 'cd ./aboutMe',    icon: '👤' },
  { id: 'projects',   name: 'cd ./projects',   icon: '🚀' },
  { id: 'experience', name: 'cd ./experience', icon: '💼' },
];
