import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Module from './modules/Module';
import { useState } from 'react';

function Users({ data, setLocal, selectedData, selectedItems }) {
   const [module, setmodule] = useState(false);

   const deleteHandler = () => {
      const local = JSON.parse(localStorage.getItem('formData'));
      localStorage.setItem('formData', JSON.stringify(local.filter((e) => e.id !== data.id)));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   };
   return (
      <>
         {module && <Module setmodule={setmodule} deleteHandler={deleteHandler} />}
         <div className=" grid grid-cols-8 text-center  py-3 text-lg border-b border-b-gray-400">
            <div className="flex col-span-2 justify-center items-center gap-x-5">
               <FaRegTrashAlt className="text-red-500 cursor-pointer" onClick={() => setmodule(true)} />
               <Link className="text-purple-500" to={`/edit/${data.id}`}>
                  <FiEdit3 />
               </Link>
            </div>
            <span className="col-span-2">{data.phoneNumber}</span>
            <span className="col-span-2 text-end">{data.email}</span>
            <span className="col-span-1 text-end pr-5 border-r-2  text-xl">{data.name}</span>
            <div className="flex items-center justify-center ">
               <input
                  className="col-span-1 w-5 h-5 accent-fuchsia-700"
                  type="checkbox"
                  checked={selectedItems.find((selcet) => selcet === data.id) ? true : false}
                  onChange={(e) => selectedData(data.id, e.target.checked)}
               />
            </div>
         </div>
      </>
   );
}

export default Users;
