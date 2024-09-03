import { useState } from 'react';
import { finalSub } from '../../../helper/helper';

function ModuleSubmit({ inputs, setModules, modules }) {
   const moduleLocal = JSON.parse(localStorage.getItem('formData')) || [];
   const [submitano, setSubmit] = useState(false);
   
   const finalSubmit = () => {
      const subData = finalSub(moduleLocal, inputs);
      !moduleLocal ? localStorage.setItem('formData', JSON.stringify([subData])) : localStorage.setItem('formData', JSON.stringify(subData));
      setModules(false);
      setSubmit(true);
      setTimeout(() => {
         setSubmit(false);
      }, 3000);
   };

   return (
      <>
         <div
            className={`absolute md:top-7 top-3 transition-all duration-300  ${
               submitano ? 'right-7' : '-right-[500px]'
            } bg-teal-100/40 w-fit border-t-4 border-teal-500 rounded-b-xl text-white px-4 py-3 shadow-md`}
            role="alert"
         >
            <div className="flex items-center gap-x-3">
               <div className="py-1">
                  <svg className="fill-current h-10 w-10 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                     <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
               </div>

               <p className="text-xl">تغییرات با موفقیت ثبت شد</p>
            </div>
         </div>
         {modules && (
            <div className="absolute inset-0 mx-auto my-auto h-fit w-fit py-10 md:px-56 sm:px-44 px-12 backdrop-blur-md border-2 border-white/20 text-black shadow-xl rounded-md z-20 flex flex-col items-center justify-center gap-y-8">
               <span className="text-center font-medium text-xl text-white">
                  شما در حال تغییر اطلاعت کاربری هستید
                  <br />
                  ایا مطمعن هستید
               </span>
               <div className="flex justify-center items-center md:gap-x-24 gap-x-3">
                  <button onClick={finalSubmit} className=" py-2 w-28 text-xl bg-teal-700 text-emerald-100 hover:bg-teal-900 border border-teal-700 transition-all duration-200 rounded-lg">
                     تغییر
                  </button>
                  <button
                     onClick={() => setModules(false)}
                     className=" py-2 w-28 bg-teal-100 text-emerald-800 text-xl rounded-lg border border-teal-100  hover:bg-transparent hover:text-white transition-all duration-200"
                  >
                     انصراف
                  </button>
               </div>
            </div>
         )}
      </>
   );
}

export default ModuleSubmit;
