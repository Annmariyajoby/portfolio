import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FaSun className="theme-icon sun" />
      ) : (
        <FaMoon className="theme-icon moon" />
      )}
    </button>
  );
}

export default ThemeToggle;