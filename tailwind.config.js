/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#54AFBE',
        'off-black': '#121417',
        'border-gray': '#25272B'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],  // Assuming you are using 'Roboto' from Google Fonts
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}

