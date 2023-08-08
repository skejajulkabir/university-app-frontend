import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const EnterOTPpage = () => {
  const [OTP, setOTP] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const globalUser = useSelector((state) => state.globalUser.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (OTP === 0) {
      toast.error("Please enter your OTP!");
      return;
    }

    await axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/mail/varifyotp`,
        {
          userID: globalUser._id,
          otp: OTP,
        }
      )
      .then((res) => {
        if(res.status === 200){
            alert("Congratulations! Your account is varified now...");
            setLoading(false)
            navigate('/')
        }else if(res.status === 400){
            toast.error("Invalid OTP!")
            setLoading(false)
        }else{
            alert("Some error accured... please try again later.")
            navigate('/varifyaccountpage')
            setLoading(false)
        }

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error accured... please try again later.")
        navigate('/varifyaccountpage')
        setLoading(false)
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
      {loading && (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-500 bg-opacity-50 fixed top-0 left-0">
          <div className="text-4xl font-bold text-white ">Loading...</div>
        </div>
      )}
      <div className="min-h-screen w-full bg-slate-950 flex justify-center items-center">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="bg-slate-400 p-6 rounded-md">
              <label htmlFor="OTP">
                <div className="text-2xl font-bold p-6 pt-1 pb-2">
                  Enter OTP.
                </div>
                <div className="text-sm font-bold pl-6 py-2">
                  The OTP is valid for 4 min.
                </div>
              </label>

              <input
                className="w-full rounded-md text-4xl p-4 "
                type="number"
                name="OTP"
                id="OTP"
                onChange={(e) => setOTP(e.target.value)}
              />
              <button
                type="submit"
                className="w-full p-4 bg-blue-700 mt-3 rounded-md text-white  text-xl cursor-pointer"
              >
                VARIFY
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterOTPpage;
