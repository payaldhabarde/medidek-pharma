/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {


      animation: {
      tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        
        tilt: {
          "0%, 50%, 100% ":{
            transform: "rotate(0deg)",
        },

        "25% ":{
          transform: "rotate(5deg)",
        },

        "75%":{
          transform: "rotate(-5deg)",
        }
      }
    }
      

    },
  },
  plugins: [],
});

