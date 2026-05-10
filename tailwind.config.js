/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          dark: '#764ba2',
        },
        accent: '#f093fb',
        gold: {
          DEFAULT: '#d4a574',
          light: '#e8c4a0',
          dark: '#b8864f',
        },
        navy: {
          DEFAULT: '#2c3e50',
          dark: '#1a252f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
