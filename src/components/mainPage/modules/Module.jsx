import { useState } from 'react';

function Module({ setmodule, data, setLocal, module }) {

   const deleteHandler = () => {
      const local = JSON.parse(localStorage.getItem('formData'));
      localStorage.setItem('formData', JSON.stringify(local.filter((e) => e.id !== data.id)));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   
   };
   
   return (
      <>
         {module && (
            <div className="absolute inset-0 mx-auto my-auto h-fit w-fit py-10 md:px-56 sm:px-44 px-12 backdrop-blur-md border-2 border-white/20 text-black shadow-xl rounded-md z-20 flex flex-col items-center justify-center gap-y-8">
               <span className="text-center font-medium text-xl">
                  شما در حال پاک کردن این مخاطب هستید. <br />
                  ایا مطمعن هستید؟
               </span>
               <div className="flex justify-center items-center md:gap-x-24 gap-x-3">
                  <button onClick={deleteHandler} className=" py-2 w-28 text-xl bg-teal-700 text-emerald-100 hover:bg-teal-900 border border-teal-700 transition-all duration-200 rounded-lg">
                     حذف
                  </button>
                  <button
                     onClick={() => setmodule(false)}
                     className=" py-2 w-28 bg-teal-100 text-emerald-800 text-xl rounded-lg border border-teal-100  hover:bg-teal-300 hover:text-white transition-all duration-200"
                  >
                     انصراف
                  </button>
               </div>
            </div>
         )}
      </>
   );
}

export default Module;
