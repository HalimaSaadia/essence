/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#194E8A",
        secondaryColor:"#F6B100",
        textNeutral:"#676E6E"
      }
    },
    
  },
  plugins: [require("daisyui")],

  
}