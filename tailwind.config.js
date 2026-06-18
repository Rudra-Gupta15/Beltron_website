/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#0a4f9e',
        darkblue:   '#003366',
        lightblue:  '#1d75d8',
        govgray:    '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
