/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        snell: ["Snell Roundhand", "serif"],
      },
      colors: {
        lightGrey: "#646E68",
        lavender: "#B2648B",
        butterfly: "#fffbfa",
        blush: "#cd828e",
      },
    },
  },
  plugins: [],
};
