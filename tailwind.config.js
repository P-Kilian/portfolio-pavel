/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your color palette
        primary: {
          900: "#862302", // darkest rust
          700: "#bf3d04", // dark orange
          500: "#f46518", // vibrant orange
          300: "#f7a050", // light orange
          100: "#fcd55a", // golden yellow
        },
        // Additional colors
        black: {
          DEFAULT: "#121212", // rich dark black but not pure black
        },
        cream: {
          DEFAULT: "#FFFDF7", // warm creamy white
        },
      },
      fontFamily: {
        "ibm-plex": ["var(--font-ibm-plex)"],
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
