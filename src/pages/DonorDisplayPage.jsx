import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const DonorDisplayPage = () => {
  const [donorData, setDonorData] = useState([]);


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getdonors`);
        setDonorData(res.data.donors);
      } catch (err) {
        console.log(err);
        toast.error("Some error occurred. Please try again later...");
      }
    };
  
    fetchData();
  
    return () => {};
  }, []);
  

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
      <div className="pt-28">
        <div className="w-full min-h-screen">
          <div className="w-4/6 mx-auto ">
            <div className="w-full flex justify-center bg-slate-400 py-3 rounded hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="text-6xl font-bold  font-serif">
                Platform Donors.
              </div>
            </div>

            <div className="w-full bg-slate-200 mt-3">
              <div className="h-4"></div>
            </div>

            {donorData.map((item, index) => {
              return <DonorCard data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorDisplayPage;

const DonorCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between h-fit rounded bg-slate-300 my-2 hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-slate-600">
        <div className="h-fit">
          <div className="w-80 m-3 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full border-2 border-slate-600 p-2">
            <img className="rounded-full" src={data.img} alt="" />
          </div>
        </div>

        <div className="bg-sky-100 w-full h-80 m-2 overflow-y-scroll overflow-x-hidden">
          <div className="">
            <div className="flex flex-row text-3xl font-bold font-serif p-2">
              <span className="">Name :</span>

              <div className="pl-2">{data.name}</div>
            </div>

            <div className="flex flex-row text-lg font-bold font-serif p-2">
              <span className="">Identity:</span>

              <div className="pl-2 ">{data.identity}</div>
            </div>

            <div className="flex flex-row text-lg font-bold font-serif p-2">
              <span className="">Address:</span>

              <div className="pl-2 ">{data.address}</div>
            </div>

            <div className="flex flex-row text-lg font-bold font-serif p-2">
              <span className="">Donated amount:</span>

              <div className="pl-2 ">{data.amount} ৳</div>
            </div>

            <div className="flex flex-row text-lg font-bold font-serif p-2 bg-slate-300">
              <span className="">Description:</span>

              <div className="pl-2">{data.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
