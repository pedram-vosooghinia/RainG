/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pedram: {
          1: "#000000",
          2: "#14213D",
          3: "#FCA311",
          4: "#E5E5E5",
          5: "#FFFFFF",
        
        },
      },
    },
  },
  plugins: [],
};
