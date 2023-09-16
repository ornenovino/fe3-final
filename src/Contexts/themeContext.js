import { createContext } from "react";

export const themes = {
  light: {
    backgroundColor: "#FFF",
    color: "#000",
    navColor: "#fecaca",
    cardColor: "#06b6d4",
  },
  dark: {
    backgroundColor: "#000",
    color: "white",
    cardColor: "#374151",
    navColor: "#6b7280",
  },
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;
