import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const CreatePostPage = () => {

  //importing global user
  const globalUser = useSelector((state) => state.globalUser.user);
  console.log(globalUser);


  const [willingToUploadMedia, setWillingToUploadMedia] =
    useState("notselected");
  const [typeOfThePostState, setTypeOfThePostState] = useState("onlyText");
  const [formData, setFormData] = useState({
    author: {
      name: globalUser.name,
      image: globalUser.avatar,
      userName: globalUser.userName ,
      role: globalUser.role ,
    },
    caption: "",
    typeOfThePost: typeOfThePostState,
    imgURL: "",
    videoURL: "",
    Likes: 0,
    comments: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/createpost` ,
        formData
      )
      .then((response)=>{
        console.log(response);
      })
    } catch (err) {
      console.log(err)
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(formData);
  };

  return (
    <div className="container mx-auto md:p-24">
      <h2 className="text-2xl font-bold mb-4">Create a post as a JUSTIAN!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="caption" className="text-lg font-medium">
            Caption:
          </label>
          <textarea
            id="caption"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={formData.caption}
            name="caption"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>

        {/* <typeOfThePostState/> */}

        <div className="bg-slate-100 my-4">
          <div className="text-2xl  my-4 p-4 w-fit mx-auto">
            Do you Want to post any media? Like photo or Video?
          </div>

          <div className="flex flex-row justify-evenly">
            <button
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setWillingToUploadMedia("Yes");
              }}
            >
              Yes
            </button>
            <button
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setWillingToUploadMedia("No");
                // setTypeOfThePostState("onlyText");
                setFormData((prev) => {
                  return { ...prev, typeOfThePost: "OnlyText" };
                });
              }}
            >
              No
            </button>
          </div>
        </div>

        {willingToUploadMedia === "Yes" ? (
          <div className="w-full bg-slate-100 rounded">
            <h1 className="w-fit mx-auto text-2xl">
              What do you want to post?
            </h1>

            <div className="flex flex-row justify-evenly">
              <button
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={() => {
                  setTypeOfThePostState("Photo");
                  setFormData((prev) => {
                    return { ...prev, typeOfThePost: "Photo" , videoURL :"" };
                  });
                }}
              >
                <div className="w-fit mx-auto">Photo</div>
              </button>

              <button
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={() => {
                  setTypeOfThePostState("Video");
                  setFormData((prev) => {
                    return { ...prev, typeOfThePost: "Video" , imgURL :"" };
                  });
                }}
              >
                <div className="w-fit mx-auto">Video</div>
              </button>
            </div>
          </div>
        ) : null}

        {typeOfThePostState === "Photo" && willingToUploadMedia === "Yes" ? (
          <div className=" my-4 bg-blue-300 rounded items-center">
            <div className="text-2xl  my-4 p-4 w-fit mx-auto font-bold text-3xl">
              Enter photo URL.(Any public URL will WORK!)
            </div>

            <div className=" w-3/4 mx-auto p-3">
              <input
                type="text"
                id="imgURL"
                name="imgURL"
                onChange={handleChange}
                value={formData.imgURL}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
            </div>
          </div>
        ) : typeOfThePostState === "Video" && willingToUploadMedia === "Yes" ? (
          <div className=" my-4 bg-red-300 rounded items-center">
            <div className="text-2xl  my-4 p-4  w-fit mx-auto font-bold text-3xl">
              Enter Video URL.(Only Youtube URLs are allowed)
            </div>

            <div className=" w-3/4 mx-auto p-3">
              <input
                type="text"
                id="videoURL"
                name="videoURL"
                onChange={handleChange}
                value={formData.videoURL}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
            </div>
          </div>
        ) : null}

          <button
            type="submit"
            className={"bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full hover:scale-110 transition-transform duration-300 ease-in-out disabled:bg-slate-400"}
            disabled={willingToUploadMedia === "Yes" && (formData.imgURL === "" && formData.videoURL === "") ? true : false}
          >
            Post
          </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
