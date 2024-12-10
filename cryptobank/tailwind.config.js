/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        spacing: {
            'custom': '48px', // Example custom value
        },
    },
  },
  plugins: [],
}

