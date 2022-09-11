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
        3: "#4FA153",
        hover: {
          3: "#5E9261",
        },
        background: {
          3: "#F1FBF1",
        },
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
