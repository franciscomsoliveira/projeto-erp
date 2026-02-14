import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    /* Removido o background-color fixo para não conflitar com o Tailwind */
  }

  body {
    font-family: 'Inter', sans-serif; /* Opcional: define uma fonte padrão */
    -webkit-font-smoothing: antialiased;
  }
`;
