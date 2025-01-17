/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6F2F", // Vibrant Orange
        secondary: "#FFEAD1", // Soft Peach
        accent: "#DCE4B8", // Muted Green
        dark: "#515739", // Dark Olive
      },
    },
  },
  plugins: [],
};
