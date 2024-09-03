import { useState } from 'react';

import Users from './Users';

import Search from './Search';
import Header from './Header';
import SelectAll from './SelectAll';
import SelctedDelete from './SelctedDelete';

function Main() {
   const [local, setLocal] = useState(JSON.parse(localStorage.getItem('formData')) || []);
   const [selectedItems, setSelectedItems] = useState([]);
   const selectedData = (id, isCheck) => {
      setSelectedItems((i) => (isCheck ? [...i, id] : i.filter((prev) => prev !== id)));
   };
   return (
      <>
         <div className="xl:container mt-10">
            <Header />
            <div className="flex items-center justify-between mt-16">
               <Search setLocal={setLocal} selectedItems={selectedItems} />
               {selectedItems.length !== 0 && <SelctedDelete selectedItems={selectedItems} setLocal={setLocal} local={local} />}
            </div>
            <div className=" mt-6">
               <div className="grid grid-cols-8 text-center bg-gray-200 text-xl border-x border-t border-gray-400 py-3 rounded-t-lg">
                  <span className="col-span-2">اقدام</span>
                  <span className="col-span-2">شماره موبایل</span>
                  <span className="col-span-2 text-end">ایمیل</span>
                  <span className="col-span-1 text-end pr-5">اسم</span>
                  <SelectAll setSelectedItems={setSelectedItems} local={local} selectedItems={selectedItems} />
               </div>
               {local && (
                  <div className=" bg-white rounded-b-md border shadow-2xl border-gray-400 max-h-[600px] overflow-auto scrollbar-webkit">
                     {local.map((data) => (
                        <Users key={data.id} data={data} setLocal={setLocal} selectedItems={selectedItems} selectedData={selectedData} />
                     ))}
                  </div>
               )}
               {!local.length && <div className="border-2 p-4 text-center text-black text-2xl rounded-b-lg">هیچ مخاطبی در لیست موجود نمیباشد</div>}
            </div>
         </div>
      </>
   );
}

export default Main;
