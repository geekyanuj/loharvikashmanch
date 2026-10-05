/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
