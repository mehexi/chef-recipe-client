/** @type {import('tailwindcss').Config} */
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
        'primary-color' : '#eb4a36'
      }
    },
  },
  plugins: [],
}