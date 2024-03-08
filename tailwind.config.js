module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', 
    './src/main.jsx'],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }