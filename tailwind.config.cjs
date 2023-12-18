/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        darkTextColor: "#8e9196",
        darkTitle: "#1DB954",
        darkSongname: "#FFFF",
      },
      screens: {
        xxs: "325px",
      },
    },
  },
  plugins: [],
};
