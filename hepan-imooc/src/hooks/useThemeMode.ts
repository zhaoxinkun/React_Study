import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode 必须在 ThemeProvider 内部使用");
  }

  return context;
}
