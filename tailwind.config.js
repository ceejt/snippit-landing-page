/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#FF6B9D",
        "primary-soft-pink": "#FFEDED",
        "secondary-blue": "#7BDFF2",
        "accent-purple": "#A78BFA",
      },
      fontFamily: {
        display: ["Futura", "Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        logo: ["Futura", "Trebuchet MS", "Arial", "sans-serif"],
      },
      animation: {
        float: "float 20s infinite ease-in-out",
        "pulse-slow": "pulse 15s infinite ease-in-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "25%": {
            transform: "translateY(-30px) translateX(30px) scale(1.05)",
          },
          "50%": {
            transform: "translateY(-60px) translateX(-30px) scale(0.95)",
          },
          "75%": {
            transform: "translateY(-30px) translateX(-60px) scale(1.05)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
