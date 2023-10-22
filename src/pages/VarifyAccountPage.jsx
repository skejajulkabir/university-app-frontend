import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const VerifyAccountPage = () => {
  const [studEmail, setStudEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const globalUser = useSelector((state) => state.globalUser.user);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    if (studEmail === "") {
      toast.error("Please enter your email address.");
      setLoading(false)
      return;
    }

    if (!studEmail.includes("@student.just.edu.bd")) {
      alert("Please enter a proper student email address... Like \"192021@student.just.edu.bd\"... Else you wont be able to request...");
      setLoading(false)
      return;
    }

    await axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/mail/sendotp`,
        {
          regularEmail: globalUser.regularEmail,
          userEmail: studEmail,
          users_id: globalUser._id,
        }
      )
      .then((res) => {
        if(res.status === 201){
            alert("An OTP is sent to the given student E-mail.");
            setLoading(false)
            navigate('/enterotp')
        }else{
            toast.error("Some error occured... please try again later.")
            setLoading(false)
        }
        
    }).catch((err) => {
          toast.error("Some error occured... please try again later." )
          toast.error(err.response.data.message);
          setLoading(false)
      })

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

      <div className="pt-24">
        <div className="min-h-screen w-full bg-slate-900">
          <div className="bg-slate-900 p-6">
            <h1 className="bg-slate-600 text-white p-3  rounded-md">
              Instructions:
            </h1>

            <ol className="list-decimal pl-6 mt-4 bg-slate-400 p-6 rounded-md ">
              <li className="bg-slate-800 text-white p-3 my-2 rounded-md">
                To verify your account, you need to request verification through
                your student email account, such as{" "}
                <span className="text-sky-200 p-1 px-4 underline cursor-pointer bg-slate-800 rounded-md">
                  (211338.phy@student.just.edu.bd)
                </span>
                .
              </li>
              <li className="bg-slate-800 text-white p-3 my-2 rounded-md">
                If you are a fresher and don't have a student account, you can
                still verify your account using any student account ending with{" "}
                <span className="text-sky-200 p-1 px-4 underline cursor-pointer bg-slate-800 rounded-md">
                  @student.just.edu.bd
                </span>
                . This account could belong to a senior or someone you know, but
                it must end with{" "}
                <span className="text-sky-200 p-1 px-4 underline cursor-pointer bg-slate-800 rounded-md">
                  @student.just.edu.bd
                </span>
                .
              </li>
              <li className="bg-slate-800 text-white p-3 my-2 rounded-md">
                An OTP will be sent to your student email account. You will need
                to use this OTP to verify your account.
              </li>
              <li className="bg-slate-800 text-white p-3 my-2 rounded-md">
                After successfully verifying your account, you will gain access
                to the feed, homepage, and all the community features of
                JUSTIAN.XYZ!
              </li>
              <li className="bg-slate-900 text-white p-3 my-2 rounded-md">
                If you don't varify your account... Your account will be deleted
                after some time...
              </li>
            </ol>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-slate-400 rounded-md p-6 m-6">
              <h1 className="bg-slate-600 text-white p-3  rounded-md">
                Enter E-mail(Student E-mail given by university.):
              </h1>

              <div className=" mt-4 bg-slate-400 py-6 rounded-md ">
                <div className="p-2 bg-slate-300 rounded-md pl-4 my-2">
                  Your Regular E-mail:
                </div>
                <input
                  className="w-full rounded-md p-4 "
                  value={globalUser.regularEmail}
                  disabled
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="p-2 bg-slate-300 rounded-md pl-4 my-2">
                Enter student E-mail: <span className="bg-red-200 px-2">(can be yours or other person's email)</span>
              </div>

              <div className=" mt-4 bg-slate-400 py-6 rounded-md ">
                <input
                  className="w-full rounded-md p-4 "
                  placeholder="Example: 211338.phy@student.just.edu.bd"
                  type="email"
                  name=""
                  id=""
                  onChange={(e) => {
                    setStudEmail(e.target.value);
                  }}
                />
              </div>

              <button
                className="w-full bg-blue-700 text-white p-3 rounded-md
                "
                type="submit"
              >
                Get OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyAccountPage;
