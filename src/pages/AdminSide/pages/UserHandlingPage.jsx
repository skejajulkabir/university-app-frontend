import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import { Link } from "react-router-dom";

const UserHandlingPage = () => {
  return (
    <>
      <div className="pt-20"></div>
      <div className="flex flex-row ">
        <LeftSideBar />

        {/* header */}
        <div className="min-h-screen w-screen pt-5">
          <div className=" w-full  bg-slate-400 rounded-md">
            <div className="text-5xl font-bold mx-auto bg-slate-300 p-6 w-fit ">
              USER HANDLINGS.
            </div>
          </div>

          {/* buttons */}

          <div className="">
            <div className="">
              <div className="w-full min-h-screen bg-slate-400 p-5 my-3 rounded-md box-border">
                <div className="">
                  <Link to="/admin/addauthoriseduser">
                    <div className="p-4 m-5  w-4/5 text-center mx-auto  bg-slate-300 rounded-md  hover:bg-slate-200 cursor-pointer mb-2 font-bold">
                      AUTHORISED USER HANDLING(BETA)
                    </div>
                  </Link>



                  <Link to="/admin/addroletouser">
                    <div className="p-4 m-5  w-4/5 text-center mx-auto  bg-slate-300 rounded-md  hover:bg-slate-200 cursor-pointer mb-2 font-bold">
                      ADD ROLES TO A USER
                    </div>
                  </Link>

                  <Link to="/admin/restrictuser">
                    <div className="p-4 m-5  w-4/5 text-center mx-auto  bg-slate-300 rounded-md  hover:bg-slate-200 cursor-pointer mb-2 font-bold">
                      RESTRICT USERS
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHandlingPage;
