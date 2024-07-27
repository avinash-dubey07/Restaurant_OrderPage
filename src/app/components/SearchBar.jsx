import React from 'react';

const SearchBar = ({ setSearchTerm }) => {

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex justify-center text-center items-center w-full'>
      <input type="text"
      placeholder='Search here'
      className='w-10 h-8  p-4 bg-gray-100 border-none focus:outline-none md:w-2/3 lg:w-2/3'
      onChange={handleInputChange}
       />
    </div>
  )
}

export default SearchBar;
