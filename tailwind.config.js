/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "960px",
        desktop: "1248px",
      },
      colors: {
        themePurple: {
          DEFAULT: "#3F1642",
        },
        themeGrey: {
          100: "#F2F1EC",
          500: '#606060',
        },
        themeGreen: {
          DEFAULT: "#27BBAD",
          100: "#1691A8",
          500: "#27BBAD",
          600: "#1691A8",
          700: "#0E7BA8",
        },
        myGreen: {
          DEFAULT: "#29AC6F",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
