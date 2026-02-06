import { create } from "zustand";

export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "theme";
interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  const storedTheme =
    (localStorage.getItem(STORAGE_KEY) as Theme | null) || "light";
  return storedTheme;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    set({ theme });
  },
}));
