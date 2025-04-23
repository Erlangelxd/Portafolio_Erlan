
import { create } from 'zustand'

export const useStore = create((set) => ({
  theme: 'light',
  language: 'es',
  setTheme: (theme) => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    set({ theme });
  },
  setLanguage: (language) => set({ language }),
}))
