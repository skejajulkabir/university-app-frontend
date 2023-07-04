import React from "react";

const ProfileButton = () => {
  return (
    <>
      <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="w-11">
          <img
            className="w-10 mr-3 rounded-full justify-center border-gray-400 border-2 p-1"
            src="/profile-photos/dp.jpg"
            alt="DP"
          />
        </div>

        <div className="ml-4 text-xl font-semibold truncate">SK Ejajul Kabir</div>
      </div>
    </>
  );
};

export default ProfileButton;
