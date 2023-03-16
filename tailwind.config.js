module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        snow: "#F7FAFD",
        blue100: "#DDE7EE",
        blue300: "#E5EFFA",
        blue500: "#939CAD",
        blue700: "#5E6778",
        blue900: "#1C202B",
        primaryBlue: "#0A327B",
        primaryRed: "#F65552",
        bgColor: "#F2F2F2",
      },
      fontFamily: {
        bodyFont: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.875rem, 0.7557rem + 0.5089vw, 1rem)",
      },
      boxShadow: {
        cardShadow: "0px 20px 60px rgba(73, 97, 168, 0.05)",
      },
      gridTemplateColumns: {
        2: "auto 45px",
      },
    },
  },
  plugins: [],
};
