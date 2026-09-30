/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#020617',
          card: '#0f172a',
          primary: '#f97316', // Vibrant Orange
          secondary: '#38bdf8', // Sky Blue
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
