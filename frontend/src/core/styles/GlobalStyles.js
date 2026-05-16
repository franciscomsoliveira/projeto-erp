import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body,
  #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.primary};

    font-size: ${({ theme }) => theme.typography.fontSize.md};

    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    transition:
      background ${({ theme }) => theme.transitions.normal},
      color ${({ theme }) => theme.transitions.normal};
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  textarea,
  select {
    outline: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundSoft};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.round};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
