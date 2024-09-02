import React from 'react';
function Search({setLocal}) {
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
   return <input onChange={searchHanler} type="text" className="w-4/6 p-1 border-4 rounded-md focus:outline-none focus:shadow-lg" />;
}

export default Search;
