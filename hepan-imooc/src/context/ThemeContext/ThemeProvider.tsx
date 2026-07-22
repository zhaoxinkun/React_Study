import {type ReactNode, useCallback, useMemo, useState} from "react";
import {ThemeContext, type ThemeMode} from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({children}: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const toggleTheme = useCallback(() => {
    setThemeMode((currentThemeMode) => (
      currentThemeMode === "light" ? "dark" : "light"
    ));
  }, []);

  const value = useMemo(() => ({
    themeMode,
    toggleTheme,
  }), [themeMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
