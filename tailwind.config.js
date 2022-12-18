/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["'M PLUS 1p'", "sans-serif"],
      bold: ["'M PLUS 1p'", "sans-serif"],
      extraBold: ["'M PLUS 1p'", "sans-serif"],
    },
    fontWeight: {
      sans: 300,
      semibold: 400,
      bold: 500,
      extrabold: 700,
    },
    extend: {
      colors: {
        theme: "#48b0d5",
        "theme-pale": "#48b0d544",
        "theme-dark": "#215163",
      },
    },
  },
  plugins: [],
  important: true,
}
