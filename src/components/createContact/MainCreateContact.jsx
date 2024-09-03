import { useState } from 'react';
import CreateContactForm from './CreateContactForm';
import Alerts from './Alerts';
import { createInputValidate } from '../../helper/helper';

function MainCreateContact() {
   const localPrv = JSON.parse(localStorage.getItem('formData')) || [];
   const [error, setError] = useState({});
   const [emailErorr, setEmailErorr] = useState(false);
   const [data, setData] = useState({
      name: '',
      email: '',
      job: '',
      phoneNumber: '',
   });
   const [button, setButton] = useState(false);
   const [sucess, setSucess] = useState(false);
   const idMaker = () => Math.ceil(Math.pow(Math.random() * 35634, 3));

   const validateHandler = (e) => {
      e.preventDefault();
      const errors = createInputValidate(data);
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
            <CreateContactForm setData={setData} data={data} error={error} />
            <Alerts submitHandler={submitHandler} sucess={sucess} setButton={setButton} button={button} emailErorr={emailErorr} />
         </form>
      </>
   );
}

export default MainCreateContact;
