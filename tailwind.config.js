/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      container: {
         center: true,
         padding: '4rem',
      },
      screens: {
         xs: '480px',
         sm: '640px',

         md: '768px',

         lg: '1024px',

         xl: '1280px',
      },
      extend: {
         fontFamily: {
            Dana: 'Dana',
            DanaMedium: 'Dana Medium',
            DanaDemiBold: 'Dana DemiBold',
            MorabbaLight: 'Morabba Light',
            MorabbaMedium: 'Morabba Medium',
            MorabbaBald: 'Morabba Bold',
         },
      },
   },
   plugins: [
      function ({ addVariant }) {
         addVariant('child', '&>*');
         addVariant('child-hover', '&>*:hover');
      },
      function ({ addUtilities }) {
         const newUtilities = {
            '.scrollbar-thin': {
               scrollbarWidth: 'thin',
               scrollbarColor: 'rgb(31 29 29) white',
            },
            '.scrollbar-webkit': {
               '&::-webkit-scrollbar': {
                  width: '6px',
               },
               '&::-webkit-scrollbar-track': {
                  background: '',
               },
               '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgb(91,21,140)',
                  borderRadius: '20px',
               },
            },
         };
         addUtilities(newUtilities, ['responsive', 'hover']);
      },
   ],
};
