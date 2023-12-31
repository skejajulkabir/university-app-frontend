import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePasswordPage = () => {
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.globalUser.user);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    retype_newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, userId: globalUser._id };
    });
  }, [globalUser._id]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.retype_newPassword) {
      toast.error("New passwords are not matching");
      return;
    }

    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/client1/updatepassword`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        toast.success("Updated Password successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="h-screen pt-24 pb-32">
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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/univ-app-logo(long).psd.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update your existing password.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Old Password
              </label>
              <div className="mt-2">
                <input
                  id="oldPassword"
                  name="oldPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="oldPassword"
                  onChange={handleChange}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="retype_newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Retype New password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="retype_newPassword"
                  name="retype_newPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={togglePasswordVisibility}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-gray-900">
                Show Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordPage;












































// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const UpdatePasswordPage = () => {
//   const navigate = useNavigate();

//   const globalUser = useSelector((state) => state.globalUser.user);

//   const [formData, setFormData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     retype_newPassword: ""
//   });

//   useEffect(()=>{
//     setFormData((prev) => {
//       return { ...prev,  userId : globalUser._id};
//     });
//   },[globalUser._id])

//   const handleChange = (e) => {
//     setFormData((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };




//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(formData.newPassword !==  formData.retype_newPassword){
//       toast.error("New passwords are not matching");
//       return
//     }
//     axios
//       .post(
//         `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/updatepassword`,
//         formData ,
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("TOKEN"),
//           },
//         }
//       )
//       .then((res) => {
//         toast.success("Updated Password successfully!")
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error(err.response.data.message)
//       });
//   };

//   return (
//     <div className="h-screen pt-24 pb-32">
//       <ToastContainer
//         position="top-center"
//         autoClose={8000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="/univ-app-logo(long).psd.png"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Update your existing password.
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="oldPassword"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Old Password
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="oldPassword"
//                   name="oldPassword"
//                   type="text"
//                   autoComplete="oldPassword"
//                   onChange={handleChange}
//                   required
//                   className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="newPassword"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   New password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="newPassword"
//                   name="newPassword"
//                   type="text"
//                   autoComplete="current-password"
//                   onChange={handleChange}
//                   required
//                   className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>




//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="retype_newPassword"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Retype New password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="retype_newPassword"
//                   name="retype_newPassword"
//                   type="text"
//                   autoComplete="current-password"
//                   onChange={handleChange}
//                   required
//                   className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Update
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdatePasswordPage;
