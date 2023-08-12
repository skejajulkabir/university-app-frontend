import axios from "axios";
import React, { useState } from "react";
import { setLoading } from "../Redux/features/utilSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  
  const [userEmail, setUserEmail] = useState("");
  
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userEmail === "") {
      toast.error("enter your email...");
      return;
    }

    dispatch(setLoading(true))

    await axios.post(
      `${
        import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
      }/mail/forgotpassotpsend`,
      { regularEmail: userEmail }
    ).then((res)=>{
      toast.success(res.data.message);
      dispatch(setLoading(false))
    }).catch((err)=>{
      dispatch(setLoading(false))
      toast.error(err.response.data.message);
    })
  };

  return (
    <div>
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




      <div className="h-screen ">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/univ-app-logo(long).psd.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Recover account
            </h2>
            <h2 className="mt-10 text-center text-xl bg-slate-200 p-2 rounded-md  font-bold leading-9 tracking-tight text-gray-900">
              You'll get a password sent to your regular email,then you'll be
              able to login with that password. You can change the password
              later in the update password section.
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address(Has to be the regular email address.)
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={userEmail} // Bind input value to userEmail state
                    type="email"
                    autoComplete="email"
                    required
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
