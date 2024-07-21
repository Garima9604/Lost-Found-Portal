/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#134B70",
        darkBlue: "#201E43",
        customTeal: "#508C9B",
        customWhite: "#EEEEEE",
        formBlue: "#043E67",
      },
      boxShadow: {
        darkblue: "0 6px 6px #201E43",
        darkbottomblue: "0 6px 6px  #201E43",
      },
    },
  },
  plugins: [],
};
