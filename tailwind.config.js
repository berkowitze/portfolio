/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "my-blue": "rgb(0, 102, 255)",
      },
    },
  },
  plugins: [],
};
