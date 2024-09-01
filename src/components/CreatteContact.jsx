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
         errors.name = 'pls enter a valid name';
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
      <img src="./img/back" alt="" />
         <div className={`absolute p-2 text-2xl left-0 right-0 mx-auto transition-all duration-300 ${emailErorr ? 'bg-red-400 top-32' : 'bg-blue-400 -top-32'} w-fit`}>
            این ایمیل قبلا استفاده شده است لطفا از ایمیل دیگری استفاده کنید
         </div>
         <Link to="/" className="absolute left-6 top-4 p-4 rounded-full bg-gray-200 w-fit border-2 border-black cursor-pointer hover:bg-slate-400 transition-all duration-200">
            <ImAddressBook className="w-10 h-10" />
         </Link>
         <div
            className={`absolute ${
               sucess ? 'top-5 right-5' : 'top-5 -right-96'
            }  flex w-fit px-4 gap-x-2 font-bold text-xl items-center py-5 bg-white rounded-lg shadow-lg border-2 border-green-500 transition-all duration-300`}
         >
            <FiAlertCircle />
            <span>کاربر مورد نظر با موفقیت ثبت شد</span>
            <FaCross />
         </div>
         {/* ////////////////////// start */}
         <div className="flex flex-col gap-y-10 items-center justify-center w-full mt-32 text-white">
            <div className="flex flex-col items-center  gap-y-12 text-2xl py-12 px-12 bg-black/50 shadow-lg rounded-lg ">
               <span className="text-3xl font-MorabbaBald">اضافه کردن مخاطب</span>
               <div className="flex flex-col gap-y-10">
                  <div className="flex flex-col gap-y-4">
                     <input name="name" className="bg-transparent border border-gray-400 h-14 rounded-full w-[460px]" type="text" onChange={inputHanler} />
                  </div>
                  <div className="flex flex-col gap-y-4">
                     <input dir="ltr" name="email" className="bg-transparent border border-gray-400 h-14 rounded-full w-[460px]" type="email" onChange={inputHanler} />
                  </div>{' '}
                  <div className="flex flex-col gap-y-4">
                     <input name="job" className="bg-transparent border border-gray-400 h-14 rounded-full w-[460px]" type="text" onChange={inputHanler} />
                  </div>{' '}
                  <div className="flex flex-col gap-y-4">
                     <input name="phoneNumber" dir="ltr" className="bg-transparent border border-gray-400 h-14 rounded-full w-[460px]" type="text" onChange={inputHanler} />
                  </div>{' '}
               </div>
            </div>
            <button
               onClick={validateHandler}
               type="submit"
               className="bg-green-400 hover:bg-green-500 hover:scale-110 border-2 border-green-700 transition-all duration-200 font-mono p-4 w-96 text-2xl shadow-xl rounded-md"
            >
               افزودن
            </button>
         </div>

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
