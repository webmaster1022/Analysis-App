/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat"],
    },
    colors: {
      primary: {
        50: "#FFF",
      },
      secondary: {
        1: "#63B5F7",
        2: "#7240FF",
        3: "#14b8a6",
        hover: {
          3: "#0d9488",
        },
        background: {
          3: "#F3F7F3",
        },
      },
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
