import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        caveat: ["Caveat"],
        indie: ["Indie Flower"],
        dancing: ["Dancing Script"],
      },
      keyframes: {
        'marquee-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'marquee-up': 'marquee-up 18s linear infinite',
      },
    },
  },
  plugins: [daisyui],
};
