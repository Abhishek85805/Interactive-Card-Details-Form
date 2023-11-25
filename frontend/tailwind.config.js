/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      one: '1280px',
      two: '1090px',
    },
    extend: {
      colors:{
          darkViolet: 'hsl(278, 68%, 11%)',
          darkGrayishViolet: 'hsl(279, 6%, 55%)',
          lightGrayishViolet: 'hsl(270, 3%, 87%)',
      }
    },
    fontFamily:{
      sans: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}

