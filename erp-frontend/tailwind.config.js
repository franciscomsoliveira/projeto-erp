export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#0f172a", // fundo principal
          secondary: "#1e293b", // cards
        },
        brand: {
          primary: "#6366f1",
          soft: "#818cf8",
        },
        border: {
          subtle: "#1e293b",
        },
      },
      borderRadius: {
        base: "0.5rem",
      },
      boxShadow: {
        soft: "0 0 30px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
