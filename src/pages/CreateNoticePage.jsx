import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/features/utilSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../Utils/LoadingComponent";

const CreateNoticePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //importing global user
  const globalUser = useSelector((state) => state.globalUser.user);
  const globalUtil = useSelector((state) => state.globalUtils);

  useEffect(() => {
    if (!globalUser.userName || !globalUser.info || !globalUser.contact) {
      navigate("/");
    }
  }, [globalUser, navigate]);

  const [willingToUploadMedia, setWillingToUploadMedia] =
    useState("notselected");
  const [typeOfThePostState, setTypeOfThePostState] = useState("onlyText");
  const [formData, setFormData] = useState({
    author: globalUser._id,
    caption: "",
    typeOfThePost: typeOfThePostState,
    imgURL: "",
    videoURL: "",
    Likes: 0,
    comments: [],
    postType: "NOTICE_POST",
  });

  const handleYesClick = (e) => {
    e.preventDefault();
    setWillingToUploadMedia("Yes");
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    setWillingToUploadMedia("No");
    setFormData((prev) => {
      return { ...prev, typeOfThePost: "onlyText" };
    });
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    setTypeOfThePostState("Video");
    setFormData((prev) => {
      return { ...prev, typeOfThePost: "Video", imgURL: "" };
    });
  };

  const handlePhotoClick = (e) => {
    e.preventDefault();
    setTypeOfThePostState("Photo");
    setFormData((prev) => {
      return { ...prev, typeOfThePost: "Photo", videoURL: "" };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.typeOfThePost === "Photo" ||
      formData.typeOfThePost === "Video"
    ) {
      if (formData.imgURL === "" && formData.videoURL === "") {
        toast.error("please enter an URL.");
        return;
      }
    }

    if (formData.typeOfThePost === "onlyText" && formData.caption === "") {
      toast.error("please enter a caption...");
      return;
    }

    dispatch(setLoading(true));

    try {
      await axios
        .post(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
          }/client1/createpost`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("TOKEN"),
            },
          }
        )
        .then(() => {
          dispatch(setLoading(false));
          alert("Your notice has been posted to the feed successfully...");
          navigate("/");
        });
    } catch (err) {
      dispatch(setLoading(false));
      toast.error("Could not add the notice to the feed. Please try again.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="container mx-auto md:p-24">
      {globalUtil.isLoading && <LoadingComponent />}
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="text-2xl font-bold mb-4">Create a NOTICE as a JUSTIAN!</h2>
      <form
        onSubmit={() => {
          e.preventDefault();
        }}
      >
        <div className="mb-4 pt-24 lg:pt-0">
          <label htmlFor="caption" className="mt-24 text-lg font-medium">
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
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  "
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  "
              onClick={handleNoClick}
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
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  "
                onClick={handlePhotoClick}
              >
                <div className="w-fit mx-auto">Photo</div>
              </button>

              <button
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  "
                onClick={handleVideoClick}
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
            <div className="text-2xl  my-4 p-4  w-fit mx-auto font-bold ">
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
          onClick={handleSubmit}
          type="submit"
          className={
            "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full hover:scale-110 transition-transform duration-300 ease-in-out disabled:bg-slate-400"
          }
          // disabled={willingToUploadMedia === "Yes" && (formData.imgURL === "" && formData.videoURL === "") ? true : false}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateNoticePage;
