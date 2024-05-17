/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: [
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sbComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [
    require('./components/presets/twpreset.js')
  ],
  theme: {},
  plugins: [],
}

