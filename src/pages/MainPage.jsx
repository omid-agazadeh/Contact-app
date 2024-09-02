import { useState } from 'react';

import Users from '../components/Users';
import { FaUserMinus } from 'react-icons/fa';

import Search from '../components/mainPage/Search';
import Header from '../components/mainPage/Header';


function MainPage() {
   const [local, setLocal] = useState(JSON.parse(localStorage.getItem('formData')) || []);
   const [sellect, setSellect] = useState(false);
   const [selectedItems, setSelectedItems] = useState([]);
   const selectedData = (id, isCheck) => {
      setSelectedItems((i) => (isCheck ? [...i, id] : i.filter((prev) => prev !== id)));
   };
   console.log(local);

   const selctedDelete = () => {
      const update = local.filter((data) => !selectedItems.includes(data.id));
      localStorage.setItem('formData', JSON.stringify(update));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   };

   return (
      
      <div className="container mt-10">
         <Header/>
         <div className="flex items-center gap-x-20">
            <label htmlFor="" className="text-lg">
               جستجو در مخاطبین:
            </label>
            <Search setLocal={setLocal} />
            <div className="p-2 border-2 rounded-full border-gray-800">
               <FaUserMinus onClick={selctedDelete} />
            </div>
         </div>
         <div className=" mt-6">
            <div className="grid grid-cols-12 text-center bg-gray-200 py-3 rounded-t-lg">
               <input className="col-span-1 accent-fuchsia-700" type="checkbox" />
               <span className="col-span-2 text-start pr-5">اسم</span>
               <span className="col-span-3">ایمیل</span>
               <span className="col-span-3">شماره موبایل</span>
               <span className="col-span-3">اقدام</span>
            </div>
            {local && (
               <div className=" bg-gray-600 rounded-b-md border-2 shadow-2xl border-black h-[850px] overflow-auto">
                  {local.map((data) => (
                     <Users key={data.id} data={data} setLocal={setLocal} sellect={sellect} selectedData={selectedData} />
                  ))}
               </div>
            )}
            {!local.length && <div className="bg-gray-600 p-4 text-center text-white text-2xl rounded-lg">هیچ کاربری در لیست موجود نمیباشد</div>}
         </div>
      </div>
   );
}

export default MainPage;
