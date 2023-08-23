/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'java-red': '#66D3FA', 
        'javascript-yellow': '#68A063',
        'react-blue': '#61DBFB',
        'python-yellow': '#FFE873',
        'html-orange': '#66D3FA',
        'css-blue': '#2565AE',
        'node-green': "#68A063",
        'figma-green': "#00d47b"
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%" : {opacity: 0},
          "100%": {opacity: 1}
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
  // safelist: {
  //   pattern: 
  //     /(bg)-('java-red'|'javascript-yellow'|'react-blue'|'python-yellow'|'html-orange'|'css-blue'|'node-green')/,
  // },
}
