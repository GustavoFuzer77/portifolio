"use client";

import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

export default function ToggleComponentTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        checked={theme === "light"}
        onClick={toggleTheme}
        type="checkbox"
      />
      <span className="slider"></span>
    </label>
  );
}
