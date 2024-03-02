/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#2980B9",
        "primary-600": "rgba(41, 127, 185, 0.5)",
        "secondary-500": "#F39C12",
        "secondary-600": "rgba(243, 157, 18, 0.7)",
        "white-500": "#F6F6F6",
        "gray-500": "#ABABAB",
      },
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
