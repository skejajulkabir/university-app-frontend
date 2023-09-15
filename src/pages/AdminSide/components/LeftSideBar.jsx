import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const globalUser = useSelector((state) => state.globalUser.user);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!globalUser.role.includes("MODERATOR")) {
      Navigate("/");
    }
  }, []);

  return (
    <>
      <div className="w-2/12 p-4 bg-slate-400 min-h-screen m-2 ">
        <Link to="/admin">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            SITE STATISTICS
          </div>
        </Link>

        <Link to="/admin/orders">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            ORDERS
          </div>
        </Link>

        <Link to="/admin/showproducts">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            PRODUCTS
          </div>
        </Link>

        <Link to="/admin/postproducts">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            ADD PRODUCTS
          </div>
        </Link>

        <Link to={"/admin/sizehandling"}>
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            SIZE QUANTITIY HANDLING
          </div>
        </Link>

        <Link to="/admin/userhandlingpage">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            USER HANDLINGS
          </div>
        </Link>

        <Link to="/admin/userhandlingpage">
          <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            ADD DONORS
          </div>
        </Link>

        <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
          SITE SETTINGS
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
