/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "576px",
      ...defaultTheme.screens,
    },
    colors: {
      primary: "#02A7C3",
      secondary: "#F0F9FB",
      white: "#FFF",
      income: "#6366f1",
      debt: "#f59e0b",
      light: {
        1: "#fafafa",
      },
      typography: {
        900: "#141418",
        300: "#A4A4A4",
        100: "#F8FDF8",
      },
      social: {
        facebook: "#4267B2",
      },
      green: {
        800: "#166534",
        100: "#DCFCE7",
      },
      yellow: {
        800: "#854d0e",
        100: "#fef9c3",
      },
      red: {
        800: "#991b1b",
        100: "#fee2e2",
      },
      success: "#30BE36",
      warning: "#FFBB38",
      danger: "#FF4040",
    },
    extend: {
      minHeight: {
        "3/5": "600px",
      },
    },
  },
  plugins: [],
};
