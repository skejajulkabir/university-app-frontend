import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalAvatar } from "../../Redux/features/userSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const UpdateDP = () => {
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.globalUser.user);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);

    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/client1/updateavatar/${globalUser._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization : "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
          dispatch(setGlobalAvatar(res.data.avatarURL));
          alert("Avatar updated successfully!");
          // window.location.reload();
        }
        // Do something if needed after successful upload
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error)
        toast.error(error.response.data.err.message)
      });
  };

  return (
    <>
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
      <div className="pt-36 bg-slate-400 min-h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="border-4 border-gray-700 w-96 h-96 rounded-full overflow-hidden">
              <img
                src={globalUser.avatar}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {!avatar && (
            <div className="flex justify-center mt-4">
              <label htmlFor="DPfile">
                <div className="text-xl font-bold text-white bg-blue-600 p-6 rounded-xl cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out">
                  CHOSE A NEW PICTURE(Maximum 1 megabyte in size)
                </div>
              </label>
              <input
                className="hidden"
                id="DPfile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          )}

          {avatar.name && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleUpload}
                className="text-xl font-bold text-white bg-blue-600 p-6 rounded-xl cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Update Avatar
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateDP;
