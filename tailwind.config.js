/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'rgb(55 65 81)',
            h1: {
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: 700,
            },
            h2: {
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: 600,
            },
            h3: {
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [],
};