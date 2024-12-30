/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "greenblue":"rgb(0,233,191)"
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}

