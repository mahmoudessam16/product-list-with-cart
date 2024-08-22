/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      'Red': 'hsl(14, 86%, 42%)',
      'Green': 'hsl(159, 69%, 38%)',
      'Rose50': 'hsl(20, 50%, 98%)',
      'Rose100': 'hsl(13, 31%, 94%)',
      'Rose300': 'hsl(14, 25%, 72%)',
      'Rose400': 'hsl(7, 20%, 60%)',
      'Rose500': 'hsl(12, 20%, 44%)',
      'Rose900': 'hsl(14, 65%, 9%)',
      'white': '#FFF',
      'redhat': '"Red Hat Text", sans-serif'
    }
  },
  plugins: [],
}
