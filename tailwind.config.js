/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2800",
        background: "#f5f5f5",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],

        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
