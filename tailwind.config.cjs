/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B3FF",
      },
      boxShadow: {
        large: "0px 4px 32px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
