import { useState } from 'react';
import { FaCross } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { ImAddressBook } from 'react-icons/im';
import { Link } from 'react-router-dom';

function CreateContact() {
   const localPrv = JSON.parse(localStorage.getItem('formData')) || [];
   const [data, setData] = useState({
      name: '',
      email: '',
      job: '',
      phoneNumber: '',
   });
   const [error, setError] = useState({});
   const [emailErorr, setEmailErorr] = useState(false);
   const [button, setButton] = useState(false);
   const [sucess, setSucess] = useState(false);
   const idMaker = () => Math.ceil(Math.pow(Math.random() * 35634, 3));
   const inputHanler = (e) => {
      const { value, name } = e.target;
      setData({ ...data, [name]: value });
   };
   const validateHandler = (e) => {
      e.preventDefault();
      const errors = {};
      const nameValidate = /^[a-zA-z\u0600-\u06FF\s\d]{4,10}$/;
      const emailValidate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
      const phoneNumberValidate = /^(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
      if (!data.name.trim()) {
         errors.name = 'لطفا این قسمت را خالی نگذارید';
      } else if (!nameValidate.test(data.name.trim())) {
         errors.name = 'تعداد کراکتر باید بین 4 و 16 حرف باشد';
      }
      if (!data.email.trim()) {
         errors.email = 'این فیلد نباید خالی باشه';
      } else if (!emailValidate.test(data.email.trim())) {
         errors.email = 'hosha';
      }
      if (data.job.trim() && !nameValidate.test(data.job.trim())) {
         errors.job = 'این فیلد سیسشیسشی خالی باشه';
      }
      if (data.phoneNumber.trim() && !phoneNumberValidate.test(data.phoneNumber.trim())) {
         errors.phoneNumber = 'این فیلد سیسشیسشی خالی باشه';
      }
      setError(errors);
      if (!localPrv.find((e) => e.email === data.email)) {
         if (Object.keys(errors).length === 0) {
            setData({ ...data, id: idMaker() });
            setButton(true);
         }
      } else {
         setEmailErorr(true);
         setTimeout(() => setEmailErorr(false), 3000);
      }

      console.log(errors);
   };
   console.log(data);
   console.log(localPrv);

   const submitHandler = () => {
      !localPrv ? localStorage.setItem('formData', JSON.stringify([data])) : localStorage.setItem('formData', JSON.stringify([...localPrv, data]));
      setButton((e) => e === false);
      console.log(localPrv);
      button && (setSucess(true), setTimeout(() => setSucess(false), 3000));
   };

   return (
      <>
         <img src="./images/back.jpg" className="absolute top-0 -z-10 h-screen w-full" alt="" />
         <div className={`absolute p-2 text-2xl left-0 right-0 mx-auto transition-all duration-300 ${emailErorr ? 'bg-red-400 top-20' : 'bg-blue-400 -top-32'} w-fit`}>
            این ایمیل قبلا استفاده شده است لطفا از ایمیل دیگری استفاده کنید
         </div>
         <Link to="/" className="absolute left-6 top-4 p-4 rounded-full w-fit border-2 border-gray-500 cursor-pointer hover:scale-110 transition-all duration-200">
            <img src="./svg/contact.svg" className="w-10 h-10" alt="" />
         </Link>

         <div
            className={`absolute top-7 transition-all duration-300  ${sucess ? 'right-7' : '-right-[500px]'} bg-teal-100/40 w-fit border-t-4 border-teal-500 rounded-b text-white px-4 py-3 shadow-md`}
            role="alert"
         >
            <div className="flex items-center gap-x-3">
               <div className="py-1">
                  <svg className="fill-current h-10 w-10 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                     <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
               </div>

               <p className="text-xl">کاربر با موفقیت ثبت شد</p>
            </div>
         </div>

         {/* ////////////////////// start */}
         <form
            onSubmit={validateHandler}
            className={`flex flex-col items-center w-fit justify-center mx-auto  shadow-xl backdrop-blur-lg border border-gray-600 rounded-xl ${
               !Object.keys(error).length === 0 ? 'mt-3' : 'mt-24'
            }  text-white`}
         >
            <div className="flex flex-col items-center  gap-y-12 text-2xl pt-12 pb-5 px-12  rounded-xl ">
               <span className="text-3xl font-MorabbaBald">اضافه کردن مخاطب</span>
               <div className="flex flex-col gap-y-8 text-xl">
                  <p className="pr-2">لطفا اطلاعات کاربری خود را وارد کنید :</p>
                  <div className="flex flex-col gap-y-2">
                     <input
                        name="name"
                        className="form-input"
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
                        className="form-input"
                        placeholder="exapmle@gmail.com"
                        type="email"
                        onChange={inputHanler}
                        autoComplete="off"
                     />
                     {error.email && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.email}</div>}
                  </div>{' '}
                  <div className="flex flex-col gap-y-2">
                     <input
                        name="job"
                        className="form-input"
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
                        className="form-input"
                        placeholder="شماره موبایل (اختیاری)"
                        type="text"
                        onChange={inputHanler}
                        autoComplete="off"
                     />
                     {error.phoneNumber && <div className="text-red-600 drop-shadow-2xl w-fit rounded-full">{error.phoneNumber}</div>}
                  </div>{' '}
               </div>
            </div>
            <div className='border-t text-2xl border-gray-600 py-6 w-full flex justify-center items-center'>
               <button
                  type="submit"
                  className="bg-white text-black hover:bg-transparent hover:text-white hover:scale-110 transition-all duration-300 border border-gray-400 h-16 rounded-full w-[430px]"
               >
                  افزودن
               </button>
            </div>
         </form>

         {/* ///////////// end */}
         {button && (
            <>
               <div className="absolute inset-0 mx-auto my-auto h-fit w-fit py-10 px-56  bg-gray-100 shadow-xl rounded-md z-20 flex flex-col items-center justify-center gap-y-8">
                  <span className="text-center font-medium text-xl">
                     شما در حال افزئدن مخاطب جدید هستید. <br />
                     ایا مطمعن هستید؟
                  </span>
                  <div className="flex justify-center items-center gap-x-24">
                     <button onClick={submitHandler} className=" py-2 w-28 text-xl bg-green-400 rounded-lg">
                        افزودن
                     </button>
                     <button onClick={() => setButton((e) => e === false)} className=" py-2 w-28 text-xl bg-gray-500 rounded-lg">
                        انصراف
                     </button>
                  </div>
               </div>
               <div onClick={() => setButton((e) => e === false)} className="absolute top-0 h-full w-full bg-black/20 z-10"></div>
            </>
         )}
      </>
   );
}

export default CreateContact;
