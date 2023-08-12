/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        // [!code focus:5]
        // primary: '#1c5ddf', // 主色
        // regular: '#4E5969', // 常规色
        // secondary: '#86909C', // 次要色
        // disabled: '#C9CDD4' // 禁用色
      }
    }
  },
  plugins: []
}
