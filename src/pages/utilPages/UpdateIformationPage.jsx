import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const UpdateInformationPage = () => {
  const globalUser = useSelector((state) => state.globalUser.user);

  const [updatedData, setUpdatedData] = useState({
    info: {
      bloodGroup: "",
      department: "",
      roll: "",
      admissionSession: "",
      currentLocation: "",
      Gender: "",
      from: "",
    },
    contact: {
      phoneNumber: {
        Number: "",
        isPublic: true,
      },
      Facebook: "",
      LinkedIn: "",
      insta: "",
      YouTube: "",
      Discord: "",
    },
    name: "",
    regularEmail: "",
  });

  useEffect(() => {
    setUpdatedData(globalUser);
  }, [globalUser.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        phoneNumber: {
          ...prevData.contact.phoneNumber,
          [name]: value,
        },
      },
    }));
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      info: {
        ...prevData.info,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL
        }/client1/updateuser/${globalUser._id}`,
        { user: updatedData },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      );
      alert("Updated your information successfully.");
      window.location.reload();
    } catch (err) {
      toast.error("Some error occurred. Please try again later.");
      console.error(err);
    }
  };
  
  


  return (
    <div className="py-32 lg:py-24 bg-slate-300 min-h-screen w-full px-3">
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
      <div className="">
        <div className="text-5xl font-bold w-full text-center ">
          Update Information.
        </div>

        <div className="lg:w-2/3 mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputComponent
              type="text"
              label="Name:"
              name="name"
              value={updatedData.name}
              handleChange={handleChange}
            />

            <InputComponent
              label="Roll:"
              name="info.roll"
              value={updatedData.info.roll}
              handleChange={handleContactChange}
            />

            <InputComponent
              type="text"
              label="Regular Email:( Be careful while changing this field... If any error takes place, you won't be able to log into your account later... The email must be valid. )"
              name="regularEmail"
              value={updatedData.regularEmail}
              handleChange={handleChange}
            />

            <InputComponent
              type="text"
              label="Current Location:"
              name="currentLocation"
              value={updatedData.info.currentLocation}
              handleChange={handleInfoChange}
            />

            <InputComponent
              type="text"
              label="From:"
              name="from"
              value={updatedData.info.from}
              handleChange={handleInfoChange}
            />

            <InputComponent
              type="text"
              label="Phone Number:"
              name="Number"
              value={updatedData.contact.phoneNumber.Number}
              handleChange={handlePhoneNumberChange}
            />

            <div>
              <label
                htmlFor="isPublic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select your phone number's privacy.
              </label>
              <div className="mt-2">
                <select
                  name="isPublic"
                  id="isPublic"
                  
                  value={updatedData.contact.phoneNumber.isPublic}
                  onChange={handlePhoneNumberChange}
                  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                >
                  <option value="" >SELECT YOUR PHONE NUMBERS PRIVACY!</option>
                  <option value="true">PUBLIC</option>
                  <option value="false">PRIVATE</option>
                </select>
              </div>
            </div>

            <InputComponent
              type="text"
              label="Facebook:"
              name="Facebook"
              value={updatedData.contact.Facebook}
              handleChange={handleContactChange}
            />

            <InputComponent
              type="text"
              label="LinkedIn:"
              name="LinkedIn"
              value={updatedData.contact.LinkedIn}
              handleChange={handleContactChange}
            />

            <InputComponent
              type="text"
              label="Instagram:"
              name="insta"
              value={updatedData.contact.insta}
              handleChange={handleContactChange}
            />

            <InputComponent
              type="text"
              label="YouTube:"
              name="YouTube"
              value={updatedData.contact.YouTube}
              handleChange={handleContactChange}
            />

            <InputComponent
              type="text"
              label="Discord:"
              name="Discord"
              value={updatedData.contact.Discord}
              handleChange={handleContactChange}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputComponent = ({ label, name, value, handleChange, type }) => {
  return (
    <div className="my-2 bg-slate-400 rounded-md p-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className="px-4 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6 "
        />
      </div>
    </div>
  );
};

export default UpdateInformationPage;
