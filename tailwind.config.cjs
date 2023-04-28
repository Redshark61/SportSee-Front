/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020203",
        secondary: "#FF0000",
      },
      margin: {
        30: "30px",
      }
    },
  },
  plugins: [],
};