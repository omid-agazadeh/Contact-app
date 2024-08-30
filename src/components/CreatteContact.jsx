import { useState } from 'react';
import { ImAddressBook } from 'react-icons/im';
import { Link } from 'react-router-dom';

function CreateContact() {
   const [button, setButton] = useState();
   const [data, setData] = useState({
      name: { value: '', error: false, submitStatus: true },
      email: { value: '', error: false, submitStatus: true },
      job: { value: '', error: false, submitStatus: true },
      phoneNumber: { value: '', error: false, submitStatus: true },
   });
   const idMaker = () => Math.ceil(Math.pow(Math.random() * 35634, 3));
   const nameHandler = (e) => {
      const value = e.target.value;
      const validate = /^[a-zA-z\u0600-\u06FF\s\d]{4,10}$/;
      const test = validate.test(value);
      setData((prevState) => ({
         ...prevState,
         name: { value, error: !test, submitStatus: test },
      }));
   };

   const emailHandler = (e) => {
      const value = e.target.value;
      const validate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
      const test = validate.test(value);
      setData((prevState) => ({
         ...prevState,
         email: { value, error: !test, submitStatus: test },
      }));
   };

   const jobHandler = (e) => {
      const value = e.target.value;
      const validate = /^[a-zA-z\u0600-\u06FF\s\d]{5,10}$/;
      const test = validate.test(value);
      setData((prevState) => ({
         ...prevState,
         job: { value, error: !test, submitStatus: test },
      }));
   };

   const phoneNumberHandler = (e) => {
      const value = e.target.value;
      const validate = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
      const test = validate.test(value);
      setData((prevState) => ({
         ...prevState,
         phoneNumber: { value, error: !test, submitStatus: test },
      }));
   };

   let hasError = false;
   const submitButton = (e) => {
      e.preventDefault();
      let newState = { ...data };

      Object.keys(newState).forEach((key) => {
         if (newState[key].value === '') {
            newState[key].submitStatus = false;
            newState[key].error = true;
            hasError = true;
         }
      });
      setData(newState);
      if (!hasError) {
         setButton(true);
      }
   };
   const submitHandler = () => {
      if (!hasError) {
         const formValue = {
            id: idMaker(),
            name: data.name.value,
            email: data.email.value,
            job: data.job.value,
            phoneNumber: data.phoneNumber.value,
         };
         const loaclss = JSON.parse(localStorage.getItem('formData'));
         !loaclss ? localStorage.setItem('formData', JSON.stringify([formValue])) : localStorage.setItem('formData', JSON.stringify([...loaclss, formValue]));
         setButton((e)=>e===false)
      }
   };

   return (
      <>
         <Link to="/" className='absolute left-6 top-4 p-4 rounded-full bg-gray-200 w-fit border-2 border-black cursor-pointer hover:bg-slate-400 transition-all duration-200'>
            <ImAddressBook className="w-10 h-10" />
         </Link>
         <div className="flex flex-col gap-y-10 items-center justify-center w-full mt-56">
            <div className="flex flex-col gap-y-8 text-2xl p-12 bg-white shadow-lg rounded-lg ">
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        نام خانوادگی:
                     </label>
                     <input className="bg-gray-400 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" onChange={nameHandler} />
                  </div>
                  {data.name.error && <div className="text-red-600 font-bold">لطفاً نام خانوادگی خود را وارد کنید</div>}
               </div>
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        ایمیل:
                     </label>
                     <input className="bg-gray-400 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" onChange={emailHandler} />
                  </div>
                  {data.email.error && <div className="text-red-600 font-bold">لطفا ایمیل خود را وارد کنیدباری مثال exaple@gmail.com</div>}
               </div>{' '}
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        شغل:
                     </label>
                     <input className="bg-gray-400 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" onChange={jobHandler} />
                  </div>
                  {data.job.error && <div className="text-red-600 font-bold">لطفاً شغل خود را به درستی وارد کنید</div>}
               </div>{' '}
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        شماره موبایل:
                     </label>
                     <input className="bg-gray-400 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" onChange={phoneNumberHandler} />
                  </div>
                  {data.phoneNumber.error && <div className="text-red-600 font-bold">لطفاً شماره موبایل کاربر را وارد کنید</div>}
               </div>{' '}
            </div>
            <button
               onClick={submitButton}
               type="submit"
               className="bg-green-400 hover:bg-green-500 hover:scale-110 border-2 border-green-700 transition-all duration-200 font-mono p-4 w-96 text-2xl shadow-xl rounded-md"
            >
               submit
            </button>
         </div>
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
