// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'goudy': ['"Goudy Bookletter 1911"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dela-gothic': ['"Dela Gothic One"', 'cursive'],
        'baloo-bhai': ['"Baloo Bhai 2"', 'cursive'],
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
        'titan-one': ['"Titan One"', 'cursive'],
        'sofia': ['Sofia', 'cursive'],
        'paytone-one': ['"Paytone One"', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
