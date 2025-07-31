import { create } from 'zustand';

// Definición de usuario para la aplicación
export interface User {
  id: number;
  name: string;
  email: string;
}

// Estado global de la aplicación gestionado con Zustand
interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Hook de Zustand para el estado global
export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));