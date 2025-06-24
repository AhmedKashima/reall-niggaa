// module.exports = {
//   content: ['./src/**/*.{html,js}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <--- тут указываем где искать классы
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
