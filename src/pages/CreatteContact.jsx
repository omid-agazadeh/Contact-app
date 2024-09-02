import { useState } from 'react';
import CreateContactForm from '../components/createContact/CreateContactForm';
import Alerts from '../components/createContact/Alerts';


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
   
   const validateHandler = (e) => {
      e.preventDefault();
      const errors = {};
      const nameValidate = /^[a-zA-z\u0600-\u06FF\s\d]{4,16}$/;
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
         errors.email = 'این ایمیل نادرست است';
      }
      if (data.job.trim() && !nameValidate.test(data.job.trim())) {
         errors.job = 'تعداد کراکترهای این فیلد باید بین 4 و 16 عدد باشده';
      }
      if (data.phoneNumber.trim() && !phoneNumberValidate.test(data.phoneNumber.trim())) {
         errors.phoneNumber = 'شماره موبایل وارد شده صحیح نمی باشد';
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
   };

   const submitHandler = () => {
      !localPrv ? localStorage.setItem('formData', JSON.stringify([data])) : localStorage.setItem('formData', JSON.stringify([...localPrv, data]));
      setButton((e) => e === false);
      button && (setSucess(true), setTimeout(() => setSucess(false), 3000));
   };

   return (
      <>
         <img src="./images/back.jpg" className="absolute top-0 -z-10 h-screen object-none w-full  overflow-x-hidden" alt="Bacgkground image" />
         

         <form onSubmit={validateHandler}>
           <CreateContactForm setData={setData} data={data}  error={error} />
           <Alerts submitHandler={submitHandler} sucess={sucess} setButton={setButton} button={button} emailErorr={emailErorr} />
         </form>
      </>
   );
}

export default CreateContact;
