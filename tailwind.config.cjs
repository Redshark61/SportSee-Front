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
        30: "2vw",
      },
      fontSize: {
        'lg': ["1.25vw", "2vw"],
        '2xl': ["1.7vw", "2.2vw"]
      }
    },
  },
  plugins: [],
};