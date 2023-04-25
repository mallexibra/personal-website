/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(50px, 70px)" },
          "50%": { transform: "translate(60px ,121px)" },
          "100%": { transform: "translate(100px, 121px)" },
        },
        wiggle2: {
          "0%": { transform: "translate(290px, 120px)" },
          "50%": { transform: "translate(222px, 125px)" },
          "100%": { transform: "translate(270px, 122px)" },
        },
        wiggle3: {
          "0%": { transform: "translate(315px, 80px)" },
          "50%": { transform: "translate(288px, 22px)" },
          "100%": { transform: "translate(350px, 47px)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite alternate",
        wiggle2: "wiggle2 3.5s ease-in-out infinite alternate",
        wiggle3: "wiggle3 3s ease-in-out infinite alternate",
      },
    },
    fontFamily: {
      poppins: ["Poppins", '"sans serif"'],
    },
  },
  plugins: [],
};
