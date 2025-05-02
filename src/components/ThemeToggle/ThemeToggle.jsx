import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="ThemeToggle">
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
