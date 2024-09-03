import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Module from './modules/Module';
import { useState } from 'react';

function Users({ data, setLocal, selectedData, selectedItems }) {
   const [module, setmodule] = useState(false);
   return (
      <>
         {module && <Module setmodule={setmodule} data={data} setLocal={setLocal} />}
         <div className=" grid md:grid-cols-8 grid-cols-12 text-center  py-3 md:text-lg border-b border-b-gray-400">
            <div className="flex md:col-span-2 col-span-2 justify-center items-center md:gap-x-5 gap-x-2">
               <div className='text-red-500 p-1  hover:bg-red-500 hover:text-white  transition-all duration-200 cursor-pointer'>
                  <FaRegTrashAlt className='md:w-6 md:h-6'  onClick={() => setmodule(true)} />
               </div>
               <Link className="text-purple-500 p-1  hover:bg-purple-500 hover:text-white  transition-all duration-200 cursor-pointer" to={`/edit/${data.id}`}>
                  <FiEdit3 className='md:w-6 md:h-6' />
               </Link>
            </div>
            <span className="md:col-span-2 hidden md:block">{data.phoneNumber}</span>
            <span className="md:col-span-2 col-span-5 text-end mt-0.5 md:text-base text-sm">{data.email}</span>
            <span className="md:col-span-1 col-span-4 text-end pr-5 md:text-xl  text-sm">{data.name}</span>
            <div className="flex items-center justify-center ">
               <input
                  className="col-span-1 md:w-5 w-4 md:h-5 h-4 accent-fuchsia-700"
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
