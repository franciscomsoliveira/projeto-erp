import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Remove o scroll horizontal que costuma aparecer com componentes absolute */
    overflow-x: hidden; 
  }

  /* Ajuste para inputs e selects não ficarem com bordas brancas feias no focus */
  input, select, textarea {
    outline: none !important;
  }

  /* Animações globais suaves */
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
