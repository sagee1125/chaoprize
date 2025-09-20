/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /text-(.+)/,
    },
  ],

  theme: {
    extend: {
      colors: {
        main: "#704936",
        second: "#B68B47",
        light: "#E5B66B",
        dark: "#57301D",
        bcg: "#FDECC2",
        lightBgc: "#FFFBF0",
      },
      fontFamily: {
        en: ["Baskerville", "serif"],
        zh: ['"PolyU Kai"', "KaiTi", "serif"],
      },
      fontSize: {
        "heading-xs": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 700 }],
        "heading-s": ["1rem", { lineHeight: "1.375rem", fontWeight: 700 }],
        "heading-m": ["1.125rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        "heading-l": ["1.5rem", { lineHeight: "2rem", fontWeight: 700 }],
        "heading-l-extra": [
          "1.75rem",
          { lineHeight: "2.25rem", fontWeight: 800 },
        ],
        "heading-xl": ["2rem", { lineHeight: "2rem", fontWeight: 700 }],

        "linked-m": ["1rem", { lineHeight: "1.375rem", fontWeight: 600 }],
        "linked-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 300 }],

        "highlight-xs": [
          "0.75rem",
          { lineHeight: "1.125rem", fontWeight: 600 },
        ],
        "highlight-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 600 }],
        "highlight-m": ["1rem", { lineHeight: "1.375rem", fontWeight: 600 }],
        "highlight-l": ["1.125rem", { lineHeight: "1.5rem", fontWeight: 600 }],
        "highlight-extra": [
          "1.125rem",
          { lineHeight: "2rem", fontWeight: 600 },
        ],

        "body-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 300 }],
        "body-xs": ["0.75rem", { lineHeight: "1.25rem", fontWeight: 300 }],

        "italic-s": [
          "0.875rem",
          { lineHeight: "1.25rem", fontStyle: "italic", fontWeight: 300 },
        ],
        "body-m": ["1rem", { lineHeight: "1.375rem", fontWeight: 300 }],
        "body-l": ["1.125rem", { lineHeight: "1.5rem", fontWeight: 300 }],

        "button-xs": ["0.75rem", { lineHeight: "1.125rem", fontWeight: 700 }],
        "button-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 700 }],
      },

      fontWeight: {
        light: 300,
        semibold: 600,
        italic: "italic",
      },

      animation: {
        "fade-in": "fadeIn 2s ease-in-out forwards",
      },
      left: ["focus-within"],

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
