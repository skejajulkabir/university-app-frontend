import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const DonatePage = () => {
  const [avatar, setAvatar] = useState({});

  const [formData, setFormData] = useState({
    donorName: "",
    donorIdentity: "",
    donorPhoneNumber: "",
    donorAddress: "",
    donorDescriptions: "",
    DonationAmount: 0,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     formData.donorName === "" ||
  //     formData.donorIdentity === "" ||
  //     formData.donorPhoneNumber === "" ||
  //     formData.donorAddress === "" ||
  //     formData.donorDescriptions === "" ||
  //     formData.DonationAmount === 0
  //   ) {
  //     toast.error("Every field has to be filled properly...");
  //     return;
  //   }

  //   if (!avatar.name) {
  //     toast.error("Please select a picture...");
  //     return;
  //   }

  //     // ? uploading donor image....
  //     // ? uploading donor image....
  //     // ? uploading donor image....
  //     try {
  //       const avatarData = new FormData();

  //       avatarData.append("avatar", avatar);

  //       const response = await axios.post(
  //         `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/donate/adddonation`,
  //         {
  //           data : {
  //             avatarData,
  //             formData
  //           },
  //           Headers : {
  //             "Content-Type": "multipart/form-data",
  //           }
  //         }
  //       );

  //       if (response.status === 200) {
  //         alert("Your information has been received successfully! Please clear the payment now...");
  //       }
  //       // Additional handling based on your backend response

  //     } catch (error) {
  //       console.error("Error submitting donation:", error);
  //       toast.error("Some error occurred.");
  //     }

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.donorName === "" ||
      formData.donorIdentity === "" ||
      formData.donorPhoneNumber === "" ||
      formData.donorAddress === "" ||
      formData.donorEmail === "" ||
      formData.donorDescriptions === "" ||
      formData.DonationAmount <= 0
    ) {
      toast.error("Every field has to be filled properly...");
      return;
    }

    if (!avatar.name) {
      toast.error("Please select a picture...");
      return;
    }

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("avatar", avatar);
      formDataToSend.append("donorName", formData.donorName);
      formDataToSend.append("donorIdentity", formData.donorIdentity);
      formDataToSend.append("donorEmail", formData.donorIdentity);
      formDataToSend.append("donorPhoneNumber", formData.donorPhoneNumber);
      formDataToSend.append("donorAddress", formData.donorAddress);
      formDataToSend.append("donorDescriptions", formData.donorDescriptions);
      formDataToSend.append("DonationAmount", formData.DonationAmount);

      await axios
        .post(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
          }/donate/adddonation`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            alert(res.data.message);
          }
          window.location.href = res.data.donationData.GatewayPageURL;
        })
        .catch((err) => {
          toast.error("Some error occured.");
        });
    } catch (error) {
      console.error("Error submitting donation:");
      toast.error("Some error occurred.");
    }
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
      <div className="min-h-screen bg-slate-300 flex items-center flex-col justify-center">
        <div className="lg:block lg:py-11"></div>
        <div className="p-10 bg-slate-500 w-full text-slate-100 text-center text-5xl">
          Donate Page
        </div>

        <div className="p-4 bg-slate-400 my-3 w-full justify-center flex min-h-screen">
          <div className="flex flex-col w-full lg:w-2/3">
            <div className="text-4xl">Add your information as a donor.</div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="NAME" className="w-full">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">NAME:</span>
                  </div>

                  <div className="ml-1 w-5/6">
                    <input
                      onChange={handleChange}
                      name="donorName"
                      type="text"
                      placeholder="Add your name here."
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="NAME"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="identity" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">IDENTITY:</span>
                  </div>

                  <div className="ml-8 w-5/6">
                    <input
                      onChange={handleChange}
                      name="donorIdentity"
                      type="text"
                      placeholder="(Ex.: Hello I'm a student of PHYSICS DEPARTMENT)"
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="identity"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              {avatar.name === undefined && (
                <div className="flex justify-center mt-4 w-full">
                  <label htmlFor="DPfile" className="w-full">
                    <div className="text-xl font-bold bg-sky-300 w-full flex items-center justify-center rounded-md  p-3 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                      <FaRegImage />{" "}
                      <span className="pl-4">CHOSE A PICTURE</span>
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
              {avatar.name !== undefined && (
                <div className="flex justify-center mt-4 w-full">
                  <label htmlFor="DPfile" className="w-full">
                    <div className="text-xl font-bold bg-yellow-300 w-full flex items-center justify-center rounded-md  p-3 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                      <FaRegImage />{" "}
                      <span className="pl-4">CHOSE A NEW PICTURE</span>
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

              <label htmlFor="phoneNum" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">PHONE:</span>
                  </div>

                  <div className="ml-4 w-5/6">
                    <input
                      onChange={handleChange}
                      name="donorPhoneNumber"
                      type="number"
                      placeholder="Add your phone number."
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="phoneNum"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="donorEmail" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">E-MAIL:</span>
                  </div>

                  <div className="ml-4 w-5/6">
                    <input
                      onChange={handleChange}
                      name="donorEmail"
                      type="email"
                      placeholder="Add your e-mail."
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="donorEmail"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="address" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">ADDRESS:</span>
                  </div>

                  <div className="ml-8 w-5/6">
                    <input
                      onChange={handleChange}
                      name="donorAddress"
                      type="text"
                      placeholder="Add your address."
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="address"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="desc" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">DESCRIPTION:</span>
                  </div>

                  <div className="ml-14 w-5/6">
                    <textarea
                      onChange={handleChange}
                      name="donorDescriptions"
                      type="text"
                      placeholder="Say something..."
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="desc"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="donationAmount" className="">
                <div className="flex flex-row bg-slate-300 p-3 items-center rounded-md mt-3  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                  <div className="w-11 flex flex-row ml-2">
                    <span className="font-semibold">DONATION AMOUNT:</span>
                  </div>

                  <div className="ml-14 w-5/6">
                    <input
                      onChange={handleChange}
                      name="DonationAmount"
                      type="number"
                      placeholder="Enter donation amount"
                      className="w-full pl-3 placeholder:pl-2 placeholder:py-4 placeholder:italic placeholder:text-slate-700 placeholder:bg-slate-300  py-2 focus:outline-none focus:ring-sky-500   bg-slate-300 rounded-md  text-slate-600 "
                      id="donationAmount"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-700 my-4 p-6 text-white text-xl rounded-md"
              >
                DONATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
