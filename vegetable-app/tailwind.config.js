/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#81C408',
          secondary: 'white',
          dark: '#45595B'
        },
        fontFamily: {
          serif: ['serif'],
        },
        fontSize: {
          '2xl': '12.5rem',
        },
      },
    },
    plugins: [],
   }