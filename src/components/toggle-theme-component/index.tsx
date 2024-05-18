"use client";

import { useEffect, useState } from "react";

export default function ToggleComponentTheme() {
  const [changeChecked, setChangeChecked] = useState(false);

  const userTheme = localStorage.getItem("theme");

  useEffect(() => {
    if (userTheme) {
      document.documentElement.classList.add(userTheme as string);
    } else {
      document.documentElement.classList.add("dark");
    }

    if (userTheme === "dark") {
      setChangeChecked(false);
    } else {
      setChangeChecked(true);
    }
  }, []);

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");

      localStorage.setItem("theme", "light");
      return;
    }

    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }
  }

  return (
    <label className="switch">
      <input
        checked={changeChecked}
        onClick={toggleTheme}
        onChange={() => {
          setChangeChecked(!changeChecked);
        }}
        type="checkbox"
      />
      <span className="slider"></span>
    </label>
  );
}
