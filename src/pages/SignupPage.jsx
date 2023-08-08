import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    Discord: "",
    Facebook: "",
    Gender: "",
    LinkedIn: "",
    YouTube:"",
    admissionSession:"",
    currentLocation: "",
    department: "",
    regularEmail: "",
    from:"",
    district: "",
    insta: "",
    name: "",
    password: "",
    phnPrivacy:"",
    phoneNumber:"",
    roll:"",
    userType: "",
    username:"",
    });



  const handleChange = (e) => {
    setFormData((prev)=>{
      return {...prev , [e.target.name]: e.target.value}
    });
  };
  console.log(formData)


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/adduser`,
        {
          "name": formData.name ,
          "userName": formData.username ,
          "password": formData.password ,
          "userType": formData.userType ,
          "regularEmail" : formData.regularEmail ,
          "info": {
            "bloodGroup" : formData.bloodGroup,
            "department": formData.department,
            "roll": formData.roll,
            "admissionSession": formData.admissionSession,
            "currentLocation": formData.currentLocation,
            "Gender": formData.Gender,
            "from": formData.from,
          },
          "contact": {
            "phoneNumber": {
              "Number": formData.phoneNumber ,
              "isPublic": formData.phnPrivacy ,
            },
            "Facebook": formData.Facebook ,
            "LinkedIn": formData.LinkedIn ,
            "insta": formData.insta ,
            "YouTube": formData.YouTube ,
            "Discord": formData.Discord ,
          },
        }
      );
      // console.log(response.data);
      if(response.status == 200){
        toast.success("Congratulations! You just became a member!")
      }
    } catch (err) {
      // console.log(err.response.data.message);
      toast.error(err.response.data.message)
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
{/* 
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
              </div> */}

              <InputComponent handleChange={handleChange} NAME={"Email address :"} ID={"regularEmail"} />

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
                    // onChange={(handleUserTypeChange)}
                    onChange={(handleChange)}
                    // onChange={(e)=>{setUserType(e.target.value);}}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                  >
                    <option value="SELECT">Select user type</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

              <div className="">personal Info.(required)</div>

              <InputComponent handleChange={handleChange} NAME={"Department :"} ID={"department"} />
              <InputComponent handleChange={handleChange} NAME={"Roll :"} ID={"roll"} type={"number"} />
              <InputComponent handleChange={handleChange} NAME={"district :"} ID={"district"} />
              

              <div>
                <label
                  htmlFor="admissionSession"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select your admission session.
                </label>
                <div className="mt-2">
                  <select
                    name="admissionSession"
                    id="admissionSession" 
                    // onChange={(handleUserTypeChange)}
                    onChange={(handleChange)}
                    // onChange={(e)=>{setUserType(e.target.value);}}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                  >
                    <option value="SELECT">SELECT YOUR ADMISSION SESSION!</option>
                    <option value="2007-2008">2007-2008</option>
                    <option value="2008-2009">2008-2009</option>
                    <option value="2009-2010">2009-2010</option>
                    <option value="2010-2011">2010-2011</option>
                    <option value="2011-2012">2011-2012</option>
                    <option value="2012-2013">2012-2013</option>
                    <option value="2013-2014">2013-2014</option>
                    <option value="2014-2015">2014-2015</option>
                    <option value="2015-2016">2015-2016</option>
                    <option value="2016-2017">2016-2017</option>
                    <option value="2017-2018">2017-2018</option>
                    <option value="2018-2019">2018-2019</option>
                    <option value="2019-2020">2019-2020</option>
                    <option value="2020-2021">2020-2021</option>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2022-2023">2022-2023</option>
                  </select>
                </div>
              </div>


              <InputComponent handleChange={handleChange} NAME={"From(desher bari koi?) :"} ID={"from"} />


              <InputComponent handleChange={handleChange}
                NAME={"CurrentLocation :"}
                ID={"currentLocation"}
                placeholder={"Example : \"Palbari.\""}
              />



              <div>
                <label
                  htmlFor="Gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gender ::
                </label>
                <div className="mt-2">
                  <select
                    name="Gender"
                    id="Gender" 
                    // onChange={(handleUserTypeChange)}
                    onChange={(handleChange)}
                    // onChange={(e)=>{setUserType(e.target.value);}}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                  >
                    <option value="SELECT">SELECT YOUR Gender!</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
              </div>


              

              <div className="bg-slate-200 rounded-md p-2">
                <div className="">Contact :</div>
                <div className="">
                  <InputComponent handleChange={handleChange} NAME={"PhoneNumber :"} type={"number"} ID={"phoneNumber"} />



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
                        // onChange={handlephnPrivacyChange}
                        onChange={handleChange}
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 w-full"
                      >
                        <option value="SELECT" className="text-slate-300">Select your number's privacy.</option>
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                      </select>
                    </div>
                  </div>




                  <InputComponent handleChange={handleChange} NAME={"Blood Group :"} ID={"bloodGroup"} />
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

const InputComponent = ({ NAME, ID , handleChange , placeholder, type}) => {
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
            type={type === "number" ? "number" : "text"}
            autoComplete={ID}
            onChange={handleChange}
            placeholder={placeholder}
            className="px-4 py-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};
