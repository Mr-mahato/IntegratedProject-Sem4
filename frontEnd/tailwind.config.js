/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./ReactWithTailwind/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navColor': 'rgb(62 79 68)',
      },
    },
  },
  plugins: [],
};
