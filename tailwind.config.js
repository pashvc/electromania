/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#45B7D1",
        neutral: "#2A303C",
        "base-100": "#ffffff",
        "base-200": "#F2F2F2",
        "base-300": "#E5E6E6",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        electromania: {
          primary: "#FF6B6B",
          secondary: "#4ECDC4",
          accent: "#45B7D1",
          neutral: "#2A303C",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
