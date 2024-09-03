import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModuleSubmit from './EditPage/modules/ModuleSubmit';
import { edtiInputValidate } from '../helper/helper';

function EditPage() {
   const params = useParams();
   const local = JSON.parse(localStorage.getItem('formData')) || [];
   const [error, setError] = useState({});
   const [modules, setModules] = useState(false);
   const [inputs, setInputs] = useState({});
   const [onLoadEmail, setOnLoadEmail] = useState({});
   const filter = local.filter((data) => String(data.id).includes(params.id));
   const res = { ...filter[0] };
   console.log(inputs);

   useEffect(() => {
      setInputs({ ...inputs, name: res.name, email: res.email, job: res.job, phoneNumber: res.phoneNumber, id: res.id });
      setOnLoadEmail({ email: res.email });
   }, []);

   console.log(onLoadEmail);

   const dataHanlder = (e) => {
      const { value, name } = e.target;
      setInputs({ ...inputs, [name]: value });
   };
   const subitHnadler = (e) => {
      e.preventDefault();
      const prevError = edtiInputValidate(inputs);
      setError(prevError);
      if (onLoadEmail.email === inputs.email) {
         if (Object.keys(prevError).length === 0) {
            setInputs({ ...inputs });
            setModules(true);
         }
      } else if (!local.find((e) => e.email === inputs.email)) {
         if (Object.keys(prevError).length === 0) {
            setInputs({ ...inputs });
            setModules(true);
         }
      }
   };

   return (
      <>
         <img src="/images/back.jpg" className="absolute top-0 -z-10 h-screen object-none w-full  overflow-x-hidden" alt="Bacgkground image" />
         <ModuleSubmit inputs={inputs} setModules={setModules} modules={modules} />
         <form onSubmit={subitHnadler}>
            <div className="flex flex-col items-center w-fit justify-center mx-auto  shadow-xl backdrop-blur-lg border border-gray-600 rounded-xl md:mt-24 mt-20  text-white">
               <div className="flex flex-col items-center  md:gap-y-12 gap-y-4 text-2xl md:pt-12 pt-4 pb-5 md:px-12 px-4  rounded-xl ">
                  <span className="md:text-3xl text-2xl font-MorabbaBald">تغییر اطلاعات</span>
                  <div className="flex flex-col md:gap-y-8 gap-y-4 md:text-xl text-lg">
                     <p className="pr-2 md:text-xl text-base">لطفا اطلاعات کاربری خود را وارد کنید :</p>
                     <div className="flex flex-col gap-y-2">
                        <input
                           name="name"
                           className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                           type="text"
                           placeholder="نام کاربری"
                           defaultValue={res.name}
                           onChange={dataHanlder}
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
                           defaultValue={res.email}
                           type="text"
                           onChange={dataHanlder}
                           autoComplete="off"
                        />
                        {error.email && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.email}</div>}
                     </div>{' '}
                     <div className="flex flex-col gap-y-2">
                        <input
                           name="job"
                           className="h-14 md:w-[400px] px-8  bg-transparent hover:scale-110 text-lg focus:scale-110 focus:border-white placeholder-gray-100 text-white hover:border-white border-gray-400  focus:outline-none border   rounded-full  transition-all duration-300"
                           type="text"
                           defaultValue={res.job}
                           placeholder="شغل (اختیاری)"
                           onChange={dataHanlder}
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
                           defaultValue={res.phoneNumber}
                           onChange={dataHanlder}
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
                     تغییر
                  </button>
               </div>
            </div>
         </form>
      </>
   );
}

export default EditPage;
