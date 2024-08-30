import { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

function Users({ data, setLocal }) {
   const [edit, setEdit] = useState(false);
   const deleteHandler = () => {
      const moz = JSON.parse(localStorage.getItem('formData'));
      const khiar = moz.filter((e) => e.id !== data.id);
      localStorage.setItem('formData', JSON.stringify(khiar));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   };
   return (
      <div className=" flex justify-around items-center py-4 text-lg border-b-2 border-b-black">
         <span>{data.name}</span>
         <span>{data.email}</span>
         {!edit && <AiOutlineEllipsis onClick={() => setEdit((e) => !e)} className="w-8 h-8" />}

         {edit && (
            <div className="flex gap-x-14 items-center">
               <button onClick={deleteHandler} className="bg-red-400 w-16 h-9 rounded-md hover:scale-110 transition-all duration-100 font-semibold">
                  حذف
               </button>
               <button onClick={() => setEdit((e) => !e)} className="bg-orange-400 w-16 h-9 rounded-md hover:scale-110 transition-all duration-100 font-semibold">
                  ویرایش
               </button>
            </div>
         )}
      </div>
   );
}

export default Users;
