import React from "react";

const ProfileButton = () => {
  return (
    <>
      <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="w-11">
          <img
            className="w-10 mr-3 rounded-full justify-center border-gray-400 border-2 p-1"
            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/337565198_611760390381817_9011426361755166686_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oxJLbCvi-eYAX9jP_hA&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfD1XzoCV4WMRFEE0_MhSGT1AiPiGr9zYOu0pY4-Gl5igw&oe=649D40FE"
            alt="DP"
          />
        </div>

        <div className="ml-4 text-xl font-semibold truncate">SK Ejajul Kabir</div>
      </div>
    </>
  );
};

export default ProfileButton;
