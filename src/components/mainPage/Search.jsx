import { IoSearch } from 'react-icons/io5';
function Search({ setLocal, selectedItems }) {
   const searchHanler = (e) => {
      const value = e.target.value.trim();
      const data = JSON.parse(localStorage.getItem('formData')) || [];
      if (!value) {
         return setLocal(data);
      } else {
         const resualt = data.filter(({ name, email }) => email.includes(value.toLowerCase()) || name.includes(value.toLowerCase()));
         setLocal(resualt);
      }
   };
   return (
      <>
         <label htmlFor="" className="text-lg">
            جستجو در مخاطبین:
         </label>
         <div className={`${selectedItems.length !== 0 ? 'w-9/12' : 'w-10/12'}  relative`}>
            <input
               onChange={searchHanler}
               placeholder="جستجو"
               type="search"
               className="w-full text-xl moz  py-2 pr-12 pl-4 bg-gray-300 rounded-lg focus:bg-transparent focus:outline-gray-400 transition-all duration-200"
            />
            <IoSearch className="absolute top-0 bottom-0 my-auto right-[2%] w-5 h-5" />
         </div>
      </>
   );
}

export default Search;
