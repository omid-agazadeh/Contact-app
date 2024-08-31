import { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditPage() {
   const local = JSON.parse(localStorage.getItem('formData'));
   const params = useParams();
   const filter = local.filter((data) => String(data.id).includes(params.id));
   const [change, setChange] = useState();
   const res = { ...filter[0] };
   const [inputs, setInputs] = useState({
      id: +params.id,
      name: { value: res.name.trim(), error: false, submit: false },
      email: { value: res.email.trim(), error: false, submit: false },
      job: { value: res.job.trim(), error: false },
      phoneNumber: { value: res.phoneNumber.trim(), error: false },
   });
   const nameHandler = (e) => {
      const value = e.target.value.toLowerCase();
      const validate = /^[a-zA-Z\u0600-\u06FF\s\d]{4,15}$/;
      const test = validate.test(value);

      if (!test) {
         setInputs({ ...inputs, name: { value: value, error: true, submit: false } });
      } else {
         setInputs({ ...inputs, name: { value: value, error: false, submit: true } });
      }
   };
   const emailHandler = (e) => {
      const value = e.target.value.toLowerCase();
      const validate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
      const test = validate.test(value);
      if (!test) {
         setInputs({ ...inputs, email: { value: value, error: true, submit: false } });
      } else {
         setInputs({ ...inputs, email: { value: value, error: false, submit: true } });
      }
   };
   const jobHandler = (e) => {
      const value = e.target.value.toLowerCase();
      const validate = /^[a-zA-z\u0600-\u06FF\s\d]{4,15}$/;
      const test = validate.test(value);
      if (value && !test) {
         setInputs({ ...inputs, job: { value: value, error: true, submit: false } });
      } else {
         setInputs({ ...inputs, job: { value: value, error: false, submit: true } });
      }
   };
   const phoneNumberHandler = (e) => {
      const value = e.target.value.toLowerCase();
      const validate = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
      const test = validate.test(value);
      if (!test) {
         setInputs({ ...inputs, phoneNumber: { value: value, error: true, submit: false } });
      } else {
         setInputs({ ...inputs, phoneNumber: { value: value, error: false, submit: true } });
      }
   };
   const subitHnadler = (e) => {
      e.preventDefault();
      console.log(inputs);
      if (inputs.name.submit || inputs.email.submit || inputs.job.submit || inputs.phoneNumber.submit) {
         if (!inputs.name.error && !inputs.email.error && !inputs.job.error && !inputs.phoneNumber.error) {
            const {
               id,
               name: { value: name },
               email: { value: email },
               job: { value: job },
               phoneNumber: { value: phoneNumber },
            } = inputs;
            const resualt = { id, name, email, job, phoneNumber };
            const addFilter = local.filter((data) => !String(data.id).includes(params.id));
            console.log([...addFilter, resualt]);
            localStorage.setItem('formData', JSON.stringify([...addFilter, resualt]));
         }
      } else {
         setChange(true);
         setTimeout(() => setChange(false), 3000);
      }
   };

   return (
      <>
         <div className="flex flex-col gap-y-10 items-center justify-center w-full mt-56">
            <div className="flex flex-col gap-y-8 text-2xl p-12 bg-white shadow-lg rounded-lg ">
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        نام خانوادگی:
                     </label>
                     <input defaultValue={res.name.trim()} onChange={nameHandler} className="bg-gray-400 px-3 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" />
                  </div>
                  {inputs.name.error && <span className="bg-red-400 text-white">تعداد کارکتر &apos; نام و نام خانوادگی &apos; باید بین 4 تا 20 کارکتر باشد</span>}
               </div>
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        ایمیل:
                     </label>
                     <input defaultValue={res.email.trim()} onChange={emailHandler} dir="ltr" className="bg-gray-400  px-3 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" />
                     {inputs.email.error && <span className="bg-red-400 text-white"> ساختار ایمیل معتبر : example@gmail.com</span>}
                  </div>
               </div>{' '}
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        شغل:
                     </label>
                     <input defaultValue={res.job.trim()} onChange={jobHandler} className="bg-gray-400 px-3 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" />
                     {inputs.job.error && inputs.job.value && <span className="bg-red-400 text-white">تعداد کاراکتر باید بین 4 تا 15 باشد</span>}
                  </div>
               </div>{' '}
               <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4">
                     <label className="w-40" htmlFor="name">
                        شماره موبایل:
                     </label>
                     <input dir="ltr" defaultValue={res.phoneNumber.trim()} onChange={phoneNumberHandler} className="bg-gray-400 px-3 hover:border rounded-md shadow-2xl h-14 w-[600px]" type="text" />
                     {inputs.phoneNumber.error && <span className="bg-red-400 text-white">تعدار کارکتر با بین 4 تا 15 عدد باشد</span>}
                  </div>
               </div>{' '}
            </div>
            <button
               onClick={subitHnadler}
               type="submit"
               className="bg-green-400 hover:bg-green-500 hover:scale-110 border-2 border-green-700 transition-all duration-200 font-mono p-4 w-96 text-2xl shadow-xl rounded-md"
            >
               ویرایش
            </button>
         </div>
      </>
   );
}

export default EditPage;
