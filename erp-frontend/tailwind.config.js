/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Isso sincroniza o Tailwind com o seu theme do Styled Components
        primary: "#4f46e5",
      },
    },
  },
  plugins: [],
};
