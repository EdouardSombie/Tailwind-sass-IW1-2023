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
        rgb: {
          darkBlue: {
            50: "#f5f7fa",
            100: "#e9eef5",
            200: "#cedae9",
            300: "163 186 214",
            400: "#7297be",
            500: "#507aa7",
            600: "#3d618c",
            700: "#334e71",
            800: "#2d445f",
            900: "#2a3a50",
            950: "#1e293a",
          },
        },
        "text-color": "var(--text-color)",
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",

        // Using modern `hsl`
        // primary: "hsl(var(--color-primary) / <alpha-value>)",
        // secondary: "hsl(var(--color-secondary) / <alpha-value>)",

        // Using legacy `rgba`
        // primary: "rgba(var(--color-primary), <alpha-value>)",
        // secondary: "rgba(var(--color-secondary), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
