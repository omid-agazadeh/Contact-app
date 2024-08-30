import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Users from './Users';
import { FaUserMinus } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

function MainPage() {
   const [local, setLocal] = useState(JSON.parse(localStorage.getItem('formData')) || []);
   const [sellect, setSellect] = useState(false);
   const [selectedItems, setSelectedItems] = useState([]);
   const selectedData = (id, isCheck) => {
      console.log(id, isCheck);
      setSelectedItems((i) => (isCheck ? [...i, id] : i.filter((prev) => prev !== id)));
      console.log(id, isCheck);
   };
   console.log(selectedItems);

   const selctedDelete = () => {
      const update = local.filter((data) => !selectedItems.includes(data.id));
      localStorage.setItem('formData', JSON.stringify(update));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   };

   return (
      <div>
         <div className="flex justify-around items-center mt-6">
            <label htmlFor="" className="text-lg">
               جستجو در مخاطبین:
            </label>
            <input type="text" className="w-4/6 p-1 rounded-md focus:outline-none focus:shadow-lg" />
            {!sellect && (
               <div className="p-2 border-2 rounded-full border-gray-800">
                  <VscAdd onClick={() => setSellect(true)} />
               </div>
            )}
            {sellect && (
               <>
                  <div className="p-2 border-2 rounded-full border-gray-800">
                     <FaUserMinus onClick={selctedDelete} />
                  </div>
                  <div className="p-2 border-2 rounded-full border-gray-800">
                     <TiArrowBack onClick={() => setSellect(false)} />
                  </div>
               </>
            )}

            <Link to="/Create" className="p-2 border-2 rounded-full border-gray-800">
               <AiOutlineCheck />
            </Link>
         </div>
         <div className="px-16 mt-6 bg">
            {local.length ? (
               <div className="bg-gray-600 rounded-md">
                  {local.map((data) => (
                     <Users key={data.id} data={data} setLocal={setLocal} sellect={sellect} selectedData={selectedData}  />
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
