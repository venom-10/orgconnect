/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#E1F3EF",
        color2: "#20262E",
        custom_blue: "#4285F4",
        custom_orng: "#FF9F29",
        custom_black: "#161616",
        custom_white: "#ffffff",
        custom_bg: "#EFF5F5",
      },
      fontFamily: {
        main: "Inter",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
