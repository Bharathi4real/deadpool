import { create } from 'zustand';

interface ModeState {
  mode: 'professional' | 'deadpool';
  isDeadpool: boolean;
  toggleMode: () => void;
  setFromLocalStorage: () => void;
}

export const useModeStore = create<ModeState>((set) => ({
  mode: 'professional',
  isDeadpool: false,
  toggleMode: () => {
    set((state) => {
      const newMode = state.mode === 'deadpool' ? 'professional' : 'deadpool';
      localStorage.setItem('mode', newMode);
      return {
        mode: newMode,
        isDeadpool: newMode === 'deadpool',
      };
    });
  },
  setFromLocalStorage: () => {
    const stored = localStorage.getItem('mode') as 'professional' | 'deadpool';
    if (stored) {
      set({
        mode: stored,
        isDeadpool: stored === 'deadpool',
      });
    }
  },
}));
