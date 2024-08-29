import { useState } from 'react';

function CreatteContact() {
   const idMaker = () => Math.ceil(Math.pow(Math.random() * 35634, 3));
   const [moz, setData] = useState([{ name: '' }, { email: '' }, { job: '' }, { phoneNumber: '' }]);
   const { name, email, job, phoneNumber } = moz;
   const nameHanlder = (e) => {
      const value = e.target.value;
      const validate = /^[a-zA-z\u0600-\u06FF\s\d]{4,10}$/;
      const test = validate.test(value);
      if (test) {
         setData({ ...moz, name: { name: value, submitStatus: true } });
      } else {
         setData({ ...moz });
      }
   };
   const emailHanlder = (e) => {
      const value = e.target.value;
      const validate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
      const test = validate.test(value);
      if (test) {
         setData({ ...moz, email: { email: value, submitStatus: true } });
      } else {
         setData({ ...moz });
      }
   };
   const jobHanlder = (e) => {
      const value = e.target.value;
      const validate = /^[a-zA-z\u0600-\u06FF\s\d]{5,10}$/;
      const test = validate.test(value);
      if (test) {
         setData({ ...moz, job: { job: value, submitStatus: true } });
      } else {
         setData({ ...moz });
      }
   };
   const phoneNumberHanlder = (e) => {
      const value = e.target.value;
      const validate = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
      const test = validate.test(value);
      if (test) {
         setData({ ...moz, phoneNumber: { phoneNumber: value, submitStatus: true } });
      } else {
         setData({ ...moz });
      }
   };

   const submitButtom = (e) => {
      e.preventDefault();

      if (!name || !email || !job || !phoneNumber) {
         if (!name.submitStatus) {
            name.submitStatus === false;
         }
      }
   };

   return (
      <div className="flex flex-col gap-y-4">
         <label htmlFor="">نام خانوادگی</label>
         <input type="text" onChange={nameHanlder} />
         {name.submitStatus && <span className="bg-red-500">erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</span>}
         <label htmlFor="">ایمیل</label>
         <input type="email" onChange={emailHanlder} />
         {!email && <span className="bg-red-500">erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</span>}
         <label htmlFor="">شغل</label>
         <input type="text" onChange={jobHanlder} />
         {!job && <span className="bg-red-500">erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</span>}
         <label htmlFor="">تلفن همراه:</label>
         <input type="text" onChange={phoneNumberHanlder} />
         {!phoneNumber && <span className="bg-red-500">erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</span>}
         <button onClick={submitButtom} type="submit" className="bg-green-500 p-2">
            submit
         </button>
      </div>
   );
}

export default CreatteContact;
