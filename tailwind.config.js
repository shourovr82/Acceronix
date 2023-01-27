/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#81d0d3",
          "secondary": "#56ce50",
          "accent": "#ccf3ff",
          "neutral": "#141A24",
          "base-100": "#faf7f5",
          "info": "#200d89",
          "success": "#1A7064",
          "warning": "#F9D266",
          "error": "#DA3A2F",
        },
      },

      {
        dark: {
          "primary": "#ad1605",
          "secondary": "#76d2e2",
          "accent": "#04e081",
          "neutral": "#221B27",
          "base-100": "#0f172a",
          "info": "#348FE5",
          "success": "#62DAC2",
          "warning": "#B0740C",
          "error": "#E5766C",
        },
      },

    ],

  },
}


