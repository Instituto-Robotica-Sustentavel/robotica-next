/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rb-yellow": {
          50: "#fefaf0",
          100: "#fdf8e9",
          200: "#fbf0d1",
          300: "#f2d06c",
          400: "#dabb61",
          500: "#c2a656",
          600: "#b69c51",
          700: "#917d41",
          800: "#6d5e31",
          900: "#554926",
        },
        "rb-verde1": {
          50: "#e6f6e8",
          100: "#daf2dd",
          200: "#b2e3b9",
          300: "#05a51d",
          400: "#05951a",
          500: "#048417",
          600: "#047c16",
          700: "#036311",
          800: "#024a0d",
          900: "#023a0a",
        },
        "rb-verde2": {
          50: "#e7ece6",
          100: "#dbe3da",
          200: "#b4c4b3",
          300: "#0c4209",
          400: "#0b3b08",
          500: "#0a3507",
          600: "#093207",
          700: "#072805",
          800: "#051e04",
          900: "#041703",
        },
      },
    },
  },
  plugins: [],
};
