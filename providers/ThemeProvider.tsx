"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Theme, useThemeStore } from "../store/theme.store";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: (theme: Theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useThemeStore();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const nextResolved =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;
      root.setAttribute("data-theme", nextResolved);
      setResolvedTheme(nextResolved);
    };

    applyTheme();

    if (theme === "system") {
      const handleChange = () => applyTheme();
      if (media.addEventListener) {
        media.addEventListener("change", handleChange);
      } else {
        media.addListener(handleChange);
      }

      return () => {
        if (media.removeEventListener) {
          media.removeEventListener("change", handleChange);
        } else {
          media.removeListener(handleChange);
        }
      };
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
