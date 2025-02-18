/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#001F3F",   // Navy Blue for the background
        mediumBlue: "#003366", // Darker blue for sections
        lightBlue: "#00AEEF",  // Light Blue for highlights and text
        whiteText: "#F0F8FF",  // Soft white for readability
      },
    },
  },
  plugins: [],
};
