/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },

      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },

        typing: {
          '0%': { width: '0ch' },
          '50%': { width: '34ch' }, 
          '100%': { width: '0ch' },                                                  
        },

        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00b3b3' }, 
        },

        moveAround: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(0, -10px)' },
          '75%': { transform: 'translate(-5px, -5px)' },
        },
      },

      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'typing': 'typing 6s steps(34) infinite', 
        'blink': 'blink 0.7s step-end infinite', 
        'moveAround': 'moveAround 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}