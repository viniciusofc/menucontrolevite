module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}',
    './src/main.jsx'],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}