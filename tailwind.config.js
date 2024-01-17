/** @type {import('tailwindcss').Config} */

const getRandomColor = () => {
  // Generate a random color in hexadecimal format
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Hero-Img' : "url('https://html-theme-kocina.vercel.app/img/header.jpg')"
      },
      colors: {
        'primary-color': '#eb4a36',
        'random': getRandomColor()
      }
    },
  },
  plugins: [],
}