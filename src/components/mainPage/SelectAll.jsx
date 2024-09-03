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
         <input onClick={checkAllHandler} checked={!selectedItems.length ? false : true} readOnly className="col-span-1 accent-fuchsia-700 w-5 h-5" type="checkbox" />
      </div>
   );
}

export default SelectAll;
