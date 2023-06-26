import React from "react";
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <>
      <label htmlFor="searchbar" className="">
        <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-24 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-11 text-3xl ml-2">
            <BiSearch />
          </div>

          <div className="ml-1 w-5/6">
            <input
              type="text"
              placeholder="Moner madhuri mishiye khujun!"
              className="w-full mr-2 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300 focus:scale-110 transition-transform duration-300 ease-in-out py-2 focus:outline-none    focus:ring-sky-500  placeholder:text-slate-400 bg-slate-300 rounded-md placeholder:pl-1 text-slate-600 "
              id="searchbar"
            />
          </div>
        </div>
      </label>
    </>
  );
};

export default SearchBar;
