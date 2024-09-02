function CreateContactForm({ error,setData,data }) {
   const inputHanler = (e) => {
      const { value, name } = e.target;
      setData({ ...data, [name]: value });
   };
   return (
      <div className="flex flex-col items-center w-fit justify-center mx-auto  shadow-xl backdrop-blur-lg border border-gray-600 rounded-xl md:mt-24 mt-20  text-white">
         <div className="flex flex-col items-center  md:gap-y-12 gap-y-4 text-2xl md:pt-12 pt-4 pb-5 md:px-12 px-4  rounded-xl ">
            <span className="md:text-3xl text-2xl font-MorabbaBald">اضافه کردن مخاطب</span>
            <div className="flex flex-col md:gap-y-8 gap-y-4 md:text-xl text-lg">
               <p className="pr-2 md:text-xl text-base">لطفا اطلاعات کاربری خود را وارد کنید :</p>
               <div className="flex flex-col gap-y-2">
                  <input
                     name="name"
                     className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                     type="text"
                     placeholder="نام کاربری"
                     onChange={inputHanler}
                     autoComplete="off"
                  />
                  {error.name && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.name}</div>}
               </div>
               <div className="flex flex-col gap-y-2">
                  <input
                     dir="ltr"
                     name="email"
                     className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                     placeholder="exapmle@gmail.com"
                     type="text"
                     onChange={inputHanler}
                     autoComplete="off"
                  />
                  {error.email && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.email}</div>}
               </div>{' '}
               <div className="flex flex-col gap-y-2">
                  <input
                     name="job"
                     className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                     type="text"
                     placeholder="شغل (اختیاری)"
                     onChange={inputHanler}
                     autoComplete="off"
                  />
                  {error.job && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.job}</div>}
               </div>{' '}
               <div className="flex flex-col gap-y-2">
                  <input
                     name="phoneNumber"
                     className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                     placeholder="شماره موبایل (اختیاری)"
                     type="text"
                     onChange={inputHanler}
                     autoComplete="off"
                  />
                  {error.phoneNumber && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.phoneNumber}</div>}
               </div>{' '}
            </div>
         </div>
         <div className="border-t text-2xl border-gray-600 py-6 w-full flex justify-center items-center">
            <button
               type="submit"
               className="bg-white text-black hover:bg-transparent hover:text-white hover:scale-110 transition-all duration-300 border border-gray-400 md:h-16 h-14 rounded-full md:w-[430px] w-[280px]"
            >
               افزودن
            </button>
         </div>
      </div>
   );
}

export default CreateContactForm;
