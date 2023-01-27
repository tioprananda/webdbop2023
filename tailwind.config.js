module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#43A047",
        abu: '#ECEFF1',
        bodi: '#BCBCBC',
        tombol: ' #1A73E8'
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        jose: ["Josefin Sans", "sans-serif"],
        serat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
