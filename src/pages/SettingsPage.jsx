import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SettingsPage = () => {


  const globalUser = useSelector((state) => state.globalUser.user);



  const Navigate = useNavigate();

  useEffect(() => {
    if (globalUser.name === "") {
      Navigate("/");
    }
  }, []);





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
            <Link to={"/updateprofilepage"}>
              <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <div className="w-11  pl-3">
                  <CgProfile className="text-2xl " />
                </div>

                <div className="ml-4 text-xl truncate font-bold">
                  Update Profile
                </div>
              </div>
            </Link>
          </div>






          <div className="px-4 w-full pb-3">
            <Link to={"/updatepass"}>
              <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <div className="w-11  pl-3">
                  <CgProfile className="text-2xl " />
                </div>

                <div className="ml-4 text-xl truncate font-bold">
                Update Password
                </div>
              </div>
            </Link>
          </div>

          <div className="px-4 w-full pb-3">
                <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out " onClick={handleLogOut}>
                  <div className="w-11  pl-3">
                    <FiLogOut className="text-2xl " />
                  </div>

                  <div className="ml-4 text-xl  truncate font-bold">
                    Log OUT!
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
