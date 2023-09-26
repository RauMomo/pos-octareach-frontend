/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        cream: "#F3F4F6",
        main: "#8B5CF6",
        mainlight: "#DFD1FD",
        subtitle: "#4E5866",
        alert: "#E92C14",
        secondary: "#315BB5",
        black: "#222222",
        main100: "#FFF7EA",
        whatsappColor: "#50CD5E",
        success: "#E6F5E9",
        instaColor: "#A237B8",
        twitterColor: "#1CB7EB",
        fbcolor: "#0572E6",
        chartmainextralight: "#C4B5FD",
        chartmainlight: "#A78BFA",
        chartmainsemidark: "#883FFF",
        chartmaindark: "#772CEE",
        chartalert: "#D5716D",
        chartdefaultline: "#435664",
        borderColor: "#D1D5DA",
        chipPendingColor: "#3B81F6",
        chipSuccessColor: "#11B981",
        chipOrderedColor: "#F59E0B",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },

  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nesting"),
  ],
};
