/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#140D27',
        primary: '#150E28',
        secondary: '#D434FE',
        tertiary: '#FF26B9',
        register: "rgba(21, 14, 40, 0.93)"
      },
      boxShadow: {
        'custom': "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        // Define your custom shadow with values for `x-offset`, `y-offset`, `blur-radius`, and `color`
      },

      backgroundImage: {
        'custom-bg': "url('/heroBall.png')",
        'purple': "url('/purple.png')",
        'custom-gradient': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',

      },
    },
  },
  plugins: [],
}