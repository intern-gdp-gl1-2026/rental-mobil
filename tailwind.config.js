// tailwind.config.js
const { color } = require("./constants/color");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: color,
      backgroundImage: {
        "lavender-linear": "linear-gradient(180deg, #654FD2 0%, #B3A4FF 100%)",
      },
      screens: {
        xs: "560px",
        xxs: "480px",
      },
      fontSize: {
        display: ["72px", { lineHeight: "78px" }],
        h1: ["48px", { lineHeight: "54px" }],
        h2: ["32px", { lineHeight: "38px" }],
        h3: ["24px", { lineHeight: "30px" }],
        h4: ["20px", { lineHeight: "26px" }],
        h5: ["16px", { lineHeight: "22px" }],
        h6: ["14px", { lineHeight: "16px" }],
        b1: ["16px", { lineHeight: "24px" }],
        b2: ["14px", { lineHeight: "22px" }],
        caption: ["12px", { lineHeight: "16px" }],
      },
      fontFamily: {
        newsreader: ["var(--font-newsreader)"],
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)"],
      },
      dropShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
      },
      insetShadow: {
        sm: "inset 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -1px 2px rgba(0, 0, 0, 0.05)",
        md: "inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
        lg: "inset 0 10px 15px rgba(0, 0, 0, 0.1), inset 0 -10px 15px rgba(0, 0, 0, 0.1)",
        xl: "inset 0 20px 25px rgba(0, 0, 0, 0.1), inset 0 -20px 25px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
