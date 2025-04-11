/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
      },
      colors: {
        'retro-purple': '#9d4edd',
        'retro-pink': '#ff5d8f',
        'retro-teal': '#00b4d8',
        'retro-blue': '#4361ee',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
        },
        '.scrollbar-thumb-retro-teal\\/30': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 180, 216, 0.3)',
            borderRadius: '3px',
          },
        },
        '.scrollbar-track-transparent': {
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}