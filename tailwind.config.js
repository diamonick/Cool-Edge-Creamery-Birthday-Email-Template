/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:
      {
        'mobile-sm': '320px',
        // => @media (min-width: 320px) { ... }
        
        'mobile-md': '375px',
        // => @media (min-width: 375px) { ... }

        'mobile-lg': '425px',
        // => @media (min-width: 425px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        
        'md-lg': '896px',
        // => @media (min-width: 896px) { ... }
  
        'lg': '1080px',
        // => @media (min-width: 1080px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily:
      {
        'Helvetica-Neue-L': ['Helvetica Neue Light'],
        'Helvetica-Neue-L-I': ['Helvetica Neue Light Italic'],
        'Helvetica-Neue-M': ['Helvetica Neue Medium'],
        'Helvetica-Neue-M-I': ['Helvetica Neue Medium Italic'],
        'Helvetica-Neue-B': ['Helvetica Neue Bold'],
        'Helvetica-Neue-B-I': ['Helvetica Neue Bold Italic'],
        'Hayward': ['Hayward']
      },
      width:
      {
        'col-1': '8.33%',
        'col-2': '16.66%',
        'col-3': '25%',
        'col-4': '33.33%',
        'col-5': '41.66%',
        'col-6': '50%',
        'col-7': '58.33%',
        'col-8': '66.66%',
        'col-9': '75%',
        'col-10': '83.33%',
        'col-11': '91.66%',
        'col-12': '100%'
      },
      colors:
      {
        primary: '#E60073',
        secondary: '#401D00',
        tertiary: '#805D40',
        background: '#FAEFDF'
      },
      borderRadius:
      {
        'circular': '50%'
      },
      backgroundImage:
      {
        'curtain': "url('./Assets/Art/Curtain_Flap_Pattern.svg')",
        'fabric': "url('./Assets/Art/Fabric_Texture.png')"
      },
      backgroundSize:
      {
        'fabric-size': '360px'
      },
      dropShadow:
      {
        'curtain': '0 16px 0px rgba(330, 100, 90, 0.25)',
        'gift-card': '0 4px 4px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}

