import { debianDark } from "./themes/debianDark";
import { debianLight } from "./themes/debianLight";

import { breakpoints } from "./tokens/breakpoints";
import { layout } from "./tokens/layout";
import { media } from "./tokens/media";
import { radius } from "./tokens/radius";
import { shadows } from "./tokens/shadows";
import { spacing } from "./tokens/spacing";
import { transitions } from "./tokens/transitions";
import { typography } from "./tokens/typography";
import { zIndex } from "./tokens/zIndex";

export const THEME_MODES = {
  DARK: "dark",
  LIGHT: "light",
};

export function createTheme(mode = THEME_MODES.DARK) {
  const selectedTheme = mode === THEME_MODES.LIGHT ? debianLight : debianDark;

  return {
    ...selectedTheme,

    breakpoints,
    layout,
    media,
    radius,
    shadows,
    spacing,
    transitions,
    typography,
    zIndex,
  };
}

export { AppThemeProvider, useAppTheme } from "./ThemeProvider";
