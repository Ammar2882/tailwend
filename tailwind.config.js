module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'hero-pattern': "url('https://source.unsplash.com/1600x900/?furniture,bed')",
      // 'footer-texture': "url('https://source.unsplash.com/1600x900/?nature,chair')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
