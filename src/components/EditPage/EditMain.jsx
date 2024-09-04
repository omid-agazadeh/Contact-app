import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ModuleSubmit from './modules/ModuleSubmit';
import { edtiInputValidate } from '../../helper/helper';
import EditInputs from './EditInputs';

function EditMain() {
   const params = useParams();
   const local = JSON.parse(localStorage.getItem('formData')) || [];
   const [error, setError] = useState({});
   const [modules, setModules] = useState(false);
   const [inputs, setInputs] = useState({});
   const [onLoadEmail, setOnLoadEmail] = useState({});
   const filter = local.filter((data) => String(data.id).includes(params.id));
   const res = { ...filter[0] };
   useEffect(() => {
      const { name, email, job, phoneNumber, id } = res;
      setInputs({ ...inputs, name, email, job, phoneNumber, id });
      setOnLoadEmail({ email: res.email });
   }, []);
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
         <img src="/images/1.jpg" className="absolute top-0 -z-10 h-screen object-none w-full  overflow-x-hidden" alt="Bacgkground image" />
         <Link
            to="/"
            className="absolute md:left-6 left-3 text-white top-2 md:top-4 md:p-4 p-2 hover:backdrop-blur-md rounded-full w-fit border-2 border-gray-500 cursor-pointer hover:scale-110 transition-all duration-200"
         >
            بازگست به لیست مخاطبین
            {/* <img src="./svg/contact.svg" className="md:w-10 w-8 md:h-10 h-8" alt="" /> */}
         </Link>
         <ModuleSubmit inputs={inputs} setModules={setModules} modules={modules} />
         <form onSubmit={subitHnadler}>
            <EditInputs setInputs={setInputs} inputs={inputs} res={res} error={error} />
         </form>
      </>
   );
}

export default EditMain;
