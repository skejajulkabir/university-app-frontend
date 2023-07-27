import React from "react";
import ProfileButton from "../components/Leftsidebar componets/ProfileButton";
import GoToSettings from "../components/Leftsidebar componets/GoToSettings";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const MenuPage = () => {



    const handleLogOut = ()=>{
        const confirmation = window.confirm("Proceed to log out?");

        if(confirmation){
            localStorage.removeItem("TOKEN");
            window.location.reload();
        }else{
            return
        }
    }



  return (
    <>
      <div className="pt-36 bg-slate-400 w-full min-h-screen ">
        <div className="w-full">
          <div className="px-4 w-full pb-3">
            <ProfileButton />
          </div>
          <div className="px-4 w-full pb-3">
            <Link to="/settings">
              <GoToSettings />
            </Link>
          </div>

          <div className="px-4 w-full pb-3" onClick={handleLogOut}>
            <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out ">
              <div className="w-11  pl-3">
                <FiLogOut className="text-2xl " />
              </div>

              <div className="ml-4 text-xl  truncate font-bold">Log OUT!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
