/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"  
  ],
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ['PT Serif'],
      },
      boxShadow: {
        'violet-400': '0 5px 15px rgba(138, 43, 226, 0.5)',
        'white': '0 5px 15px rgba(138, 43, 226, 0.5)',
      },
    },
  },
  plugins: [],
}


