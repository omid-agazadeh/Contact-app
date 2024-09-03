function SelectAll({ setSelectedItems, local, selectedItems }) {
   const checkAllHandler = (e) => {
      const checked = e.target.checked;
      if (checked) {
         const SelectId = local.map((data) => {
            return data.id;
         });
         setSelectedItems(SelectId);
      } else {
         setSelectedItems([]);
      }
   };
   return (
      <div className="flex items-center justify-center ">
         <input onClick={checkAllHandler} checked={!selectedItems.length ? false : true} readOnly className="col-span-1 accent-fuchsia-700 md:w-5 w-4 md:h-5 h-4" type="checkbox" />
      </div>
   );
}

export default SelectAll;
