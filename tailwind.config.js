module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'brand-grey': {
          300: '#828282',
          DEFAULT: '#898989',
          500: '#B5B5B5',
          600: '#5E5E5E',
          800: '#383838',
        },
        'brand-beige': {
          100: '#E5E5E5',
          200: '#E3D9CD',
          300: '#EAE5E0',
          DEFAULT: '#E9BA9E',
        },
        'brand-brown-500': '#4E3924',
        'brand-orange': '#FF6721',
      },
      fontFamily: {
        'body': ['Source Sans Pro'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
