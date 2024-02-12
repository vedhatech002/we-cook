/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        "hero-bg": "./src/assets/hero-bg.png",
      },
    },
  },
  plugins: [],
};
