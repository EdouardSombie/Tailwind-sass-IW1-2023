/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: "#f5f7fa",
          100: "#e9eef5",
          200: "#cedae9",
          300: "#a3bad6",
          400: "#7297be",
          500: "#507aa7",
          600: "#3d618c",
          700: "#334e71",
          800: "#2d445f",
          900: "#2a3a50",
          950: "#1e293a",
        },
        lightBlue: "#5D7A97",
        lightGreen: "#00FFBF",
        darkGreen: "#00D5D5",
        pink: "#FF2896",
        orange: "#FF9B65",
        "text-color": "var(--text-color)",
      },
      borderRadius: {
        "5xl": "3rem",
      },
      letterSpacing: {
        small: "0.01em",
      },
      backgroundImage: {
        "gradient-187":
          "linear-gradient(-187deg,var(--tw-gradient-from) 0%, var(--tw-gradient-to) 60%)",
      },
    },
  },
  plugins: [],
};
