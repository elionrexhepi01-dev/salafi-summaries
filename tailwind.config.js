/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,js}"],
  theme: {
    extend: {
      colors: {
        brandDarkBg: "#1c1a17",
        brandCardBg: "#24211e",
        brandGold: "#d6b278",
        brandTextMain: "#ede8df",
        brandTextMuted: "#b3a898",
      },
    },
  },
  plugins: [],
};
