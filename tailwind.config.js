/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      container: {
         center: true,
         padding:"10rem"
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
   plugins: [],
};
