import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Users from './Users';

function MainPage() {
   const [local, setLocal] = useState(JSON.parse(localStorage.getItem('formData')) || []);
   
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
            <Link to="/Create" className="p-2 border-2 rounded-full border-gray-800">
               <AiOutlineCheck />
            </Link>
         </div>
         <div className="px-16 mt-6 bg">
            {local.length ? (
               <div className="bg-gray-600 rounded-md">
                  {local.map((data) => (
                     <Users key={data.id} data={data} setLocal={setLocal} />
                  ))}
               </div>
            ) : (
               <div className="bg-gray-600 p-4 text-center text-white text-2xl rounded-lg">هیچ کاربری در لیست موجود نمیباشد</div>
            )}
         </div>
      </div>
   );
}

export default MainPage;
