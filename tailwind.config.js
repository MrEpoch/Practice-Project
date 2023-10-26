/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkmode: {
          500: '#121212',
          400: '#181818',
          300: '#404040',
          200: '#282828',
          100: '#B3B3B3',
        }
      }
    },
  },
  plugins: [],
}

