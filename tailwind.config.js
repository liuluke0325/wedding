/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      dynaPuff: ["DynaPuff", "cursive"],
    },
    colors: {
      "dark-blue": "#023e8a",
    },
  },
  plugins: [],
};
