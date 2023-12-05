/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#062226',
        brick: '#893446',
        'yellow-cream': '#EDE288',
        white: '#FFFFFF',
        cream: '#E0E0E0',
        violet: '#856888',
        'light-brown': '#938686',
        'light-violet': '#C9BEDC',
        'green-radioactive': '#8EFF8B',
        'green-radioactive-light': '#9BA4ED', 
        gray: '#3E3C3C',
        'dark-gray': '#938686'
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace']
      },
    },
  },
  plugins: [],
}