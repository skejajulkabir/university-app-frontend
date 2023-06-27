import React from "react";
import { BiSearch } from "react-icons/bi";
import PeoplebarProfileButton from "./PeoplebarProfileButton";

const People = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-500  overflow-y-scroll overflow-x-hidden scrollbar-hide m-4 p-3 items-center rounded-md  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out h-2/6">

        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
        <PeoplebarProfileButton/>
      </div>
    </>
  );
};

export default People;
