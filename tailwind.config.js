/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '2/1': '2 / 1',
        '1/1': '1 / 1', // For square images
      }
    },
  },
  plugins: [],
}

