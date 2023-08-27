/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['Josefin Sans']
      },
      backgroundImage: {
        'hero': 'url("/hero.jpg")',
      }
    },
  },
  plugins: [],
};

