/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#F8F9FA",  // Light background for better contrast
        darkBlue: "#003366",  // Dark blue for headings
        lightBlue: "#007BFF", // Lighter blue for highlights
        whiteText: "#333333", // Darker text for readability
      },
    },
  },
  plugins: [],
};
