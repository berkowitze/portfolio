/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "rgb(0, 102, 255)",
        "my-red": "rgb(255, 51, 51)",
        "my-green": "rgb(33, 196, 33)",
        "my-orange": "rgb(255, 148, 9)",
        "my-purple": "rgb(150, 31, 168)",
      },
      backgroundColor: {
        "my-blue": "rgb(0, 102, 255)",
      },
    },
  },
  plugins: [],
};
