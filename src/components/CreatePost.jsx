import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const globalUser = useSelector((state) => state.globalUser.user);

  return (
    <>
      <Link to={"/createpost"}>
        <div className="flex flex-col  rounded-lg bg-slate-200 shadow-2xl  lg:mt-20  md:max-w-3xl mx-auto mb-2 mt-2">
          <div className="text-xl py-1 px-2 text-slate-600 ml-2">
            Create new post.
          </div>
          <div className="bg-slate-300 p-4 flex flex-row rounded-lg h-full justify-center items-center mx-2 ">
            <div className="w-10 h-10">
              <img
                src={globalUser.avatar}
                alt="profile pic"
                className="w-full h-full object-cover rounded-full justify-center border-gray-400 border-2 p-1"
              />
            </div>

            <input
              className="ml-3   placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm cursor-pointer "
              autoComplete="off"
              placeholder="Create a post!"
              type="text"
              name="search"
            />
          </div>

          <button className="bg-slate-400 w-2/3 mx-auto rounded  my-2 hover:scale-110 transition-transform duration-300 ease-in-out text-slate-100">
            Add a photo!
          </button>
        </div>
      </Link>
    </>
  );
};

export default CreatePost;
