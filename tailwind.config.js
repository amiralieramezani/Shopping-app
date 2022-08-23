/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        navlinks: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },

        slide: {
          "0%": { transform: "translateY(-500px)" },
          "100%": { transform: "translateY(0px)" },
        },

        slideup: {
          "0%": { transform: "translateY(300px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "slide-down": "slide 0.5s ease-in-out",
        "nav-link-slide": "navlinks 2s ease",
        "sortBar-slide": "slideup 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
