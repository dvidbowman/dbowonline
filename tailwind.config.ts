import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'slight-off-white': '#EBEBEB',
        'darker-off-white': '#d6d6d6'
      },
    },
  },
  plugins: [],
} satisfies Config;
