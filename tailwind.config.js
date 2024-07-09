/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "googel",
      },
      boxShadow: {
        'sh': '0 15px 24px rgba(37,44,65,0.32)',
      },
    },
  },
  plugins: [],
}

