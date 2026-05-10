import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { debianDark, debianLight } from "./theme";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function AppProvider({ children }) {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("@erp:theme") || getSystemTheme();
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event) {
      const savedTheme = localStorage.getItem("@erp:theme");

      if (!savedTheme) {
        setThemeMode(event.matches ? "dark" : "light");
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const theme = themeMode === "dark" ? debianDark : debianLight;

  function toggleTheme() {
    const nextTheme = themeMode === "dark" ? "light" : "dark";

    localStorage.setItem("@erp:theme", nextTheme);
    setThemeMode(nextTheme);
  }

  function resetThemeToSystem() {
    localStorage.removeItem("@erp:theme");
    setThemeMode(getSystemTheme());
  }

  return (
    <ThemeProvider
      theme={{
        ...theme,
        themeMode,
        toggleTheme,
        resetThemeToSystem,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
