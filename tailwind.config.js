/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', "sans-serif"],
    },

    fontWeight: {
      light: 300,
      regular: 400,
      "semi-bold": 600,
      bold: 800,
    },

    colors: {
      blue: "hsl(209, 23%, 22%)",
      "dark-blue": "hsl(207, 26%, 17%)",
      "very-dark-blue": "hsl(200, 15%, 8%)",
      gray: "hsl(0, 0%, 52%)",
      "light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },

    extend: {
      boxShadow: {
        header: "0px 0.125rem 0.25rem 0px rgba(0,0,0,0.055)",
        input: "0px 0.125rem 0.5625rem 0px rgba(0,0,0,0.055)",
        card: "0px 0px 0.4375rem 0.125rem rgba(0,0,0,0.03)",
        "button-light": "0px 0px 0.4375rem 0px rgba(0,0,0,0.03)",
        button: "0px 0px 0.25rem 1px rgba(0,0,0,0.105)",
      },

      screens: {
        "lg-plus": "1208px",
        "xl-plus": "1310px",
        "2xl-plus": "2000px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
