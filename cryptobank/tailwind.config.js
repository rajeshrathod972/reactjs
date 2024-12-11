/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        spacing: {
            'custom': '48px', // Example custom value
        },
        transform: {
          'custom-transform': 'rotate(6deg) skewX(-50deg) scaleX(-1)',
        },
        transformOrigin: {
          'custom-origin': '0 100%',
        },
    },
  },
  plugins: [],
}

