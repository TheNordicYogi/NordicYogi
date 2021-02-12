const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./components/layout.js", "./pages/index.js", "./pages/blog/[id].js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      smxxl: "400px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        white87: "rgba(255, 255, 255, 0.87)",
        white60: "rgba(255, 255, 255, 0.60)",
        white38: "rgba(255, 255, 255, 0.38)",
        mgray: "rgba(30, 30, 30, 0.9)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
