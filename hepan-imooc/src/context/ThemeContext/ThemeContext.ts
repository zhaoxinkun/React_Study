import {createContext} from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  themeMode: ThemeMode
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
