import { create } from 'zustand';

interface SectionStore {
    currentSection: string,
    setCurrentSection: (section:string) => void
}

export const useSection = create<SectionStore>((set) => ({
    currentSection: 'RESUMES',
    setCurrentSection: (section:string) => set(() => ({ currentSection: section })),
  }));
