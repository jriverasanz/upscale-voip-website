/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#97499c",
          navy: "#28385d",
          slate: "#6b7da8",
          charcoal: "#231f20",
          lavender: "#f4eaff",
          softblue: "#e5ecfb"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        card: "0 25px 60px rgba(17,38,87,0.12)",
        marquee: "0 20px 45px rgba(40,56,93,0.12)"
      }
    }
  },
  plugins: []
};
