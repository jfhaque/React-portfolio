/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#E3F2FD", // Lightest blue (Main Background)
        mediumBlue: "#BBDEFB", // Slightly darker blue
        darkBlue: "#1976D2", // Dark blue for accents
        accentBlue: "#64B5F6", // Bright blue for highlights
        textDark: "#1A1A1A", // Dark gray for readability
      },
    },
  },
  plugins: [],
};
