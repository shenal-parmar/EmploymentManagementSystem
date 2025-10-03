/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily:{
        "pacific":["Pacifico","sans-serif"]
      }
    },
  },
  plugins: [],
}

