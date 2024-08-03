/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        '400': 400,
      },
      fontSize: {
        '11px': '11px',
      },
      lineHeight: {
        '14px': '14px',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        poppins:["Poppins", "sans-serif"],
      },
      colors: {
        'custom-bg': '#0A101B',
        'custom-allbg': '#0B121D',
        'custom-navbar-bg': '#0E1624',
        'custom-shadow':'#151B29',
        'custom-white':'#CBCFD6',
        'custom-welcom':'#E8EAED',
        'custom-font-color':'#848799',
        
      
      },
    },
  },
  plugins: [],
}

