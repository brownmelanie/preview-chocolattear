/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['VCRMono', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
        "loop-scroll-second": "loop-scroll-second 20s linear infinite",
        "loop-scroll-third": "loop-scroll-third 8s linear infinite",
        'slide': 'slide 0.5s ease-in-out',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-second": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-third": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
      
    },
  },
  plugins: [],
}

