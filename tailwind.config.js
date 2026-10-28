/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f2f8fc',
          100: '#e3f1f9',
          200: '#c9e3f3',
          300: '#a3cfe8',
          400: '#74b3d8',
          500: '#4f95c4',
          600: '#3c77a3',
          700: '#345e84',
          800: '#324f6c',
          900: '#31445c',
        },
        sand: {
          50: '#fbf8f4',
          100: '#f5efe6',
          200: '#ebe0cf',
          300: '#dccab0',
          400: '#c8ad88',
          500: '#b8946c',
          600: '#a67d58',
          700: '#8a6749',
          800: '#715540',
          900: '#5d4736',
        },
        foam: {
          50: '#f6fbfa',
          100: '#ecf6f4',
          200: '#d6ede9',
          300: '#b3ddd6',
          400: '#85c5bd',
          500: '#5fa9a1',
          600: '#498d86',
          700: '#3c726d',
          800: '#345e5a',
          900: '#2e4f4c',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
