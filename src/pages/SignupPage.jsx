import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userType, setUserType] = useState("");
  const [phnPrivacy, setphnPrivacy] = useState("");
  const [formData, setFormData] = useState({});

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handlephnPrivacyChange = (event) => {
    setphnPrivacy(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(FormData)
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
  }



  return (
    <>
      <div className=" pt-24 ">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/univ-app-logo(long).psd.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account.
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputComponent handleChange={handleChange} NAME={"NAME :"} ID={"name"} />
              <InputComponent handleChange={handleChange}
                NAME={"Username(Has to be unique):"}
                ID={"username"}
              />

              <div>
                <label
                  htmlFor="displayPic"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Upload a profile picture.
                </label>
                <div className="mt-2">
                  <input
                    id="displayPic"
                    name="displayPic"
                    type="file"
                    autoComplete="displayPic"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <InputComponent handleChange={handleChange} NAME={"Email address :"} ID={"email"} />

              <div>
                <label
                  htmlFor="userType"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select your type
                </label>
                <div className="mt-2">
                  <select
                    name="userType"
                    id="userType"
                    value={userType}
                    onChange={handleUserTypeChange}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                  >
                    <option value="">Select user type</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

              <div className="">personal Info.(required)</div>

              <InputComponent handleChange={handleChange} NAME={"Department :"} ID={"department"} />
              <InputComponent handleChange={handleChange} NAME={"Roll :"} ID={"roll"} />
              <InputComponent handleChange={handleChange}
                NAME={"AdmissionSession :"}
                ID={"admissionSession"}
              />
              <InputComponent handleChange={handleChange}
                NAME={"CurrentLocation :"}
                ID={"currentLocation"}
              />
              <InputComponent handleChange={handleChange} NAME={"Gender :"} ID={"Gender"} />
              <InputComponent handleChange={handleChange} NAME={"From(desher bari koi?) :"} ID={"from"} />

              <div className="bg-slate-200 rounded-md p-2">
                <div className="">Contact :</div>
                <div className="">
                  <InputComponent handleChange={handleChange} NAME={"PhoneNumber :"} ID={"phoneNumber"} />



                  <div>
                    <label
                      htmlFor="phnPrivacy"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select your phone number's privacy :
                    </label>
                    <div className="mt-2">
                      <select
                        name="phnPrivacy"
                        id="phnPrivacy"
                        value={phnPrivacy}
                        onChange={handlephnPrivacyChange}
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                      >
                        <option value="" className="text-slate-300">Select your number's privacy.</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                      </select>
                    </div>
                  </div>




                  <InputComponent handleChange={handleChange} NAME={"Facebook id link :"} ID={"Facebook"} />
                  <InputComponent handleChange={handleChange} NAME={"LinkedIn id link :"} ID={"LinkedIn"} />
                  <InputComponent handleChange={handleChange} NAME={"Instagram id link :"} ID={"insta"} />
                  <InputComponent handleChange={handleChange} NAME={"Discord id link :"} ID={"Discord"} />
                  <InputComponent handleChange={handleChange}
                    NAME={"YouTube channel link(Jod thake ar ki... :) ) :"}
                    ID={"YouTube"}
                  />
                </div>
              </div>

              <InputComponent handleChange={handleChange} NAME={"Password :"} ID={"password"} />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up!
                </button>
              </div>




            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Login to your account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

const InputComponent = ({ NAME, ID , handleChange }) => {
  return (
    <>
      <div>
        <label
          htmlFor={ID}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {NAME} :
        </label>
        <div className="mt-2">
          <input
            id={ID}
            name={ID}
            type="text"
            autoComplete={ID}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};
