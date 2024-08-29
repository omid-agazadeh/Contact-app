import { useState } from 'react';
import { AiOutlineCheck, AiOutlineEllipsis } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

function MainPage() {
   const [edit, setEdit] = useState(false);
   return (
      <div>
         <div className="flex justify-around items-center mt-6">
            <label htmlFor="" className="text-lg">
               جستجو در مخاطبین:
            </label>
            <input type="text" className="w-4/6 p-1 rounded-md focus:outline-none focus:shadow-lg" />
            <div className="p-2 border-2 rounded-full border-gray-800">
               <VscAdd />
            </div>
            
            <Link  className="p-2 border-2 rounded-full border-gray-800">
               <AiOutlineCheck />
            </Link>
         </div>
         <div className="px-16 mt-6">
            <div className="bg-gray-600 rounded-md">
               <div className=" flex justify-around items-center py-4 text-lg border-b-2 border-b-black">
                  <span>سینا</span>
                  <span>mozinao koskholinano</span>
                  {!edit && <AiOutlineEllipsis onClick={() => setEdit((e) => !e)} className="w-8 h-8" />}

                  {edit && (
                     <div className="flex gap-x-14 items-center">
                        <button className="bg-red-400 w-16 h-9 rounded-md hover:scale-110 transition-all duration-100 font-semibold">حذف</button>
                        <button className="bg-orange-400 w-16 h-9 rounded-md hover:scale-110 transition-all duration-100 font-semibold">ویرایش</button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainPage;
