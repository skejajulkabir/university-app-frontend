import React from "react";
import { Link } from "react-router-dom";

const PeoplebarProfileButton = ({ user }) => {
  // console.log(user)
  return (
    <>
        <Link to={`/profile/${user?._id}`} className="flex flex-row bg-slate-300 w-full mx-2 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-12">
            <img
              className="w-full mr-3 rounded-full justify-center border-gray-400 border-2 p-1"
              src={user?.avatar}
              alt="DP"
            />
          </div>

          <div className="ml-4 text-xl font-semibold truncate">
            {user?.name}
          </div>
        </Link>
    </>
  );
};

export default PeoplebarProfileButton;
