/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' },  // adjust width according to your text length
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' }, // cursor color
        },
      },
      animation: {
        'typing': 'typing 3.5s steps(30) 1s 1 normal both',  // adjust timing and steps based on text length
        'blink': 'blink 1s infinite step-end',  // blinking cursor effect
      },

    },
  },
  plugins: [],
}