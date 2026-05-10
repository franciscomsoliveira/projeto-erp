export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
};

const base = {
  breakpoints,
  media,

  radius: {
    xs: "4px",
    sm: "8px",
    md: "10px",
    lg: "14px",
    xl: "20px",
  },

  font: {
    family: `"DM Sans", "Ubuntu", "Segoe UI", Arial, sans-serif`,
    heading: `"Syne", "Ubuntu", sans-serif`,
    size: {
      xs: "11px",
      sm: "13px",
      md: "14px",
      lg: "18px",
      xl: "22px",
      xxl: "28px",
    },
  },

  layout: {
    sidebarWidth: "240px",
    sidebarMobileWidth: "320px",
    topbarHeight: "60px",
  },

  glass: {
    sidebar: "rgba(19, 21, 28, 0.82)",
    sidebarLight: "rgba(255, 255, 255, 0.82)",
    border: "rgba(255, 255, 255, 0.08)",
    blur: "18px",
    shadow: "0 18px 45px rgba(0, 0, 0, 0.22)",
  },

  animation: {
    // Sidebar expand/collapse — arranca rápido, pousa suave
    // cubic-bezier: saída explosiva (0.4→0) entrada gentil (0→0.2)
    sidebar: "200ms cubic-bezier(0.4, 0, 0.2, 1)",

    // Elementos que aparecem/somem (labels, chevron, overlay)
    // Ligeiramente mais rápido para não atrasar o olho
    fade: "150ms cubic-bezier(0.4, 0, 1, 1)",

    // Hover em botões, cards, ícones — quase imperceptível, só dá resposta tátil
    hover: "100ms ease-out",

    // Modais, tooltips, dropdowns — entra com personalidade, sai sem cerimônia
    enter: "180ms cubic-bezier(0.0, 0, 0.2, 1)",
    leave: "120ms cubic-bezier(0.4, 0, 1, 1)",

    // Transições de página — discreto, não compete com o conteúdo
    page: "160ms ease-out",
  },
};

export const debianDark = {
  ...base,
  mode: "dark",
  colors: {
    background: "#0D0F14",
    backgroundSoft: "#13151C",
    surface: "#13151C",
    surfaceStrong: "#1A1D27",
    border: "#252836",

    glassSidebar: "rgba(19, 21, 28, 0.82)",
    glassBorder: "rgba(255, 255, 255, 0.08)",

    primary: "#5B6AF0",
    primaryHover: "#6F7BFF",
    secondary: "#3DE0A0",
    accent: "#F0775B",

    text: "#E8EAF0",
    textMuted: "#6B7190",

    input: "#1A1D27",

    success: "#3DE0A0",
    warning: "#F59E0B",
    error: "#F0775B",
    info: "#5B6AF0",

    shadow: "rgba(0,0,0,.45)",
  },
};

export const debianLight = {
  ...base,
  mode: "light",
  colors: {
    background: "#F5F6FA",
    backgroundSoft: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceStrong: "#EEF1F7",
    border: "#D9DEEA",

    glassSidebar: "rgba(255, 255, 255, 0.82)",
    glassBorder: "rgba(23, 26, 34, 0.08)",

    primary: "#5B6AF0",
    primaryHover: "#4654D9",
    secondary: "#009E73",
    accent: "#D95F45",

    text: "#171A22",
    textMuted: "#697086",

    input: "#FFFFFF",

    success: "#009E73",
    warning: "#B7791F",
    error: "#D95F45",
    info: "#3B56D9",

    shadow: "rgba(0,0,0,.12)",
  },
};
