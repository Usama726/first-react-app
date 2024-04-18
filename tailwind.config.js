/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"
    )
      ({
        shadowColor: "rgba(0, 0, 0, 0.7)",
        shadowBlur: "3px",
        shadowOffsetX: "12px",
        shadowOffsetY: "12px",
      }),
  ],
}

