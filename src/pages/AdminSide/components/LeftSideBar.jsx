import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <div className="w-2/12 p-4 bg-slate-400 min-h-screen m-2">
        <Link to="/admin">
            <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
            SITE STATISTICS
            </div>
        </Link>

        <Link to="#">
            <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
                PRODUCTS
            </div>
        </Link>


        <Link to="/admin/postproducts">
            <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
                ADD PRODUCTS
            </div>
        </Link>

        <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
          SIZE QUANTITIY
        </div>
        <div className="p-2 flex bg-slate-300 rounded-md py-3 px-4 hover:bg-slate-200 cursor-pointer mb-2 font-bold">
          SITE SETTINGS
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
