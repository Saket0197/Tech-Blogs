/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "750px" },
      sm: { max: "500px" },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
