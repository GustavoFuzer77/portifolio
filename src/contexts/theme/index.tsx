"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
  getColors: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  getColors: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const getColors = () => {
    return {
      dark: {
        foregroundRgb: "#1a1a1a",
        focusColor: "#7289da",
        textColorRgb: "#ffffff",
        shadowComponents:
          "box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      },
      light: {
        foregroundRgb: "#efefef",
        focusColor: "#3498db",
        textColorRgb: "#333333",
      },
    }[theme]; // Retorna as cores com base no tema atual
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
