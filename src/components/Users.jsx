import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Users({ data, setLocal, sellect, selectedData }) {
   const deleteHandler = () => {
      const local = JSON.parse(localStorage.getItem('formData'));
      const filtered = local.filter((e) => e.id !== data.id);
      localStorage.setItem('formData', JSON.stringify(filtered));
      setLocal(JSON.parse(localStorage.getItem('formData')) || []);
   };
   return (
      <div className=" grid grid-cols-12 text-center  py-4 text-lg border-b-2 border-b-black">
         <input className='col-span-1' type="checkbox" onChange={(e) => selectedData(data.id, e.target.checked)} />
         <span className='col-span-2 text-start pr-5'>{data.name}</span>
         <span className='col-span-3'>{data.email}</span>
         <span className='col-span-3'>{data.phoneNumber}</span>

         
            <div className="flex col-span-3 justify-around text-white">
               <Link to={`/edit/${data.id}`}>
                  <FiEdit3 />
               </Link>
               <FaRegTrashAlt />
            </div>
      
      </div>
   );
}

export default Users;
