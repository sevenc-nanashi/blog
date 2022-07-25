/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        theme: "#48b0d5",
        "theme-pale": "#48b0d544"
      }
    },
  },
  plugins: [],
  important: true,
}
