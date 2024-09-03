import { useState } from 'react';
import SelectModule from './modules/SelectModule';

// eslint-disable-next-line react/prop-types
function SelctedDelete({ selectedItems, setLocal, local }) {
   const [selectModule, setSelecttModule] = useState(false);
   const selctedDelete = () => {
      // eslint-disable-next-line react/prop-types
      const update = local.filter((data) => !selectedItems.includes(data.id));
      localStorage.setItem('formData', JSON.stringify(update));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
      setSelecttModule(false)
   };
   return (
      <>
         {selectModule && <SelectModule selctedDelete={selctedDelete} setSelecttModule={setSelecttModule} />}
         <div onClick={() => setSelecttModule(true)} className="py-2 px-4 w-full md:w-auto text-center md:text-base text-xl  rounded-full  bg-red-500 hover:scale-110 text-white transition-all duration-200 cursor-pointer">
            پاک کردن همه
         </div>
      </>
   );
}

export default SelctedDelete;
