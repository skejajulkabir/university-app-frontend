import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ com }) => {
  return (
    <>
      <div className="comment flex flex-row mb-3">
        <Link to={`/profile/${com.userId}`}>
          <div className="w-10 h-10 m-1    border-slate-400 border-2 rounded-full p-1">
            <img
              src={com.img}
              alt="DP"
              className="w-full h-full object-cover rounded-full border-slate-600  "
            />
          </div>
        </Link>

        <div className="bg-slate-300 w-full p-3 pt-1 rounded-lg mx-2 ">
          <Link to={`/profile/${com.userId}`}>
            <div className="font-bold text-lg text-slate-800">{com.name}</div>
            <div className="font-bold text-xs text-slate-800">
              {com.userName}
            </div>
          </Link>
          <div className="">{com.comment}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
