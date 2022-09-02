module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#00c9c9",
          black: "#000000",
          "black-40": "#0000009d",
          dark: "#1f1f1f",
          white: "#FFFFFF",
          gray: "#636363",
          gray2: "#d3d3d3",
        }
      },
      spacing: {
        18: "68px",
        19: "72px",
        21: "80px",
        112: "29rem",
        128: "32rem",
        152: "38rem",
        "75vh": "75vh",
        "85vh": "85vh",
        "90vh": "90vh"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
