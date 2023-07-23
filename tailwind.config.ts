import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slight-off-white': '#EBEBEB',
        'darker-off-white': '#d6d6d6'
      },

      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },

        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },

        'title-fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'          
          },
        }
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-in-right': 'fade-in-right 0.3s ease-out',
        'fade-in-left': 'fade-in-left 0.3s ease-out',
        'title-fade-in': 'title-fade-in 0.5s ease-out'
      }
    },
  },
  plugins: [],
} satisfies Config;
