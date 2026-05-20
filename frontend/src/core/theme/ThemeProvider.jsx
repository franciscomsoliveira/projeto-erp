import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { ThemeProvider as StyledProvider } from "styled-components";

import { createTheme, THEME_MODES } from "./index";

import { themeStorage } from "../storage/theme.storage";

const ThemeContext = createContext({});

function getInitialTheme() {
  const storedTheme = themeStorage.get();

  if (storedTheme === THEME_MODES.DARK || storedTheme === THEME_MODES.LIGHT) {
    return storedTheme;
  }

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  )?.matches;

  return prefersDark ? THEME_MODES.DARK : THEME_MODES.LIGHT;
}

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    themeStorage.set(mode);
  }, [mode]);

  const theme = useMemo(() => {
    return createTheme(mode);
  }, [mode]);

  function toggleTheme() {
    setMode((currentMode) =>
      currentMode === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK,
    );
  }

  function setDarkTheme() {
    setMode(THEME_MODES.DARK);
  }

  function setLightTheme() {
    setMode(THEME_MODES.LIGHT);
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        isDark: mode === THEME_MODES.DARK,
        isLight: mode === THEME_MODES.LIGHT,
        toggleTheme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
