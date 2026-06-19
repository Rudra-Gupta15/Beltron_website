/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#0F4BB8', // Exact NICSI primary blue
        darkblue:   '#0A2E73', // Exact NICSI dark header blue
        lightblue:  '#12B8FF', // Exact NICSI cyan accent
        govgray:    '#f5f5f5',
        navtext:    '#1C2F57', // Exact NICSI dark navy text
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
