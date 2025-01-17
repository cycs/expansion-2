/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1216px",
      // '2xl': '1496px',
    },
    extend: {},
  },
  plugins: [],
};
