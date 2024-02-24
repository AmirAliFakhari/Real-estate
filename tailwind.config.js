/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ["Shabnam"],
        shabnamBold: ["Shabnam-Bold"],
        shabnamMeduim: ["Shabnam-Medium"],
        shabnamThin: ["Shabnam-Thin"],
        shabnamLight: ["Shabnam-Light"]
      },
      colors: {
        'Gray-3-EDEDED': '#EDEDED',
        "Gray-10-505050": "#505050"
      }
    },
  },
  plugins: [],
}

