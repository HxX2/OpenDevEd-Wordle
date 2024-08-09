/** @type {import('tailwindcss').Config} */
import debugScreensPlugin from 'tailwindcss-debug-screens'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        'orange': '#E68225',
        'green' : '#00A86B',
        'yellow': '#57AC57',
        'bg': '#181615',
        'grey': '#454540',
        'lightgrey': '#93938B',
        }
      },
    fontFamily: {
      baloo: ['"Baloo 2"', 'sans-serif'],
    },
  },
  plugins: [debugScreensPlugin],
}

