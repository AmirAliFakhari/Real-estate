/** @type {import('tailwindcss').Config}   */
export default {
  content: ["./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir"],
        vazirBold: ["Vazir-Bold"],
        vazirMeduim: ["Vazir-Medium"],
        vazirThin: ["Vazir-Thin"],
        vazirLight: ["Vazir-Light"]
      },
      colors: {
        'Gray-3-EDEDED': '#EDEDED',
        "Gray-10-505050": "#505050",
        "Gray-4-E1E1E1": "#E1E1E1"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

