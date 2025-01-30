import React, { useState } from 'react';
import SearchIC from "/src/assets/icons/search.svg";

const FullWindowSearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const isActiveSearch = isActive;

  return (
    <div className="bottom-0">
      {/* Search Button with Design Effects */}
      <button 
        onClick={handleClick}
        className={`py-2 px-5 my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md
            ${isActiveSearch ? 'scale-105 bg-gradient-to-r from-[#009b49] to-[rgb(105,184,141)] hover:scale-110' : 'bg-greenLight'}
            text-[#fff]`}
      >
        <span
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#009b49] to-[rgb(105,184,141)] transition-all duration-500 ease-in-out 
            ${isActiveSearch ? 'z-[-1] opacity-100' : 'z-[-1] opacity-0'}`}
        ></span>
        <img src={SearchIC} alt="Search Icon" className="w-6 h-6" />
      </button>

      {/* Full-screen search bar overlay */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-1/2 bg-white rounded-lg shadow-lg p-6">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full p-4 text-xl bg-gray-100 rounded-lg shadow-lg focus:outline-none"
              placeholder="Search..."
            />
            <button
              className="absolute top-2 right-2 text-gray-400"
              onClick={handleClose}
            >
              ✖️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullWindowSearchBar;
