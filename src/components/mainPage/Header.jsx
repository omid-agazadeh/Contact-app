import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";


function Header() {
   return (
      <header className="flex justify-between items-center mt-6">
         <h2 className="text-4xl">لیست مخاطبین</h2>

         <Link to="/Create" className="py-2 px-5 gap-x-1 flex items-center rounded-full border-gray-800 text-white bg-fuchsia-600 hover:bg-fuchsia-700 transition-all duration-300">
            افزودن مخاطب
            <FiPlus className="w-5 h-5" />
         </Link>
      </header>
   );
}

export default Header;
