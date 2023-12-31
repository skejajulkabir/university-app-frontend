import React, { useEffect, useState } from "react";
import PeoplebarProfileButton from "./PeoplebarProfileButton";
import axios from "axios";

const People = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getrightsidebaruserlist`)
        .then((res) => {
          setUserData(res.data.users);
        })
        .catch((err) => {
          alert("there was an error fetching the data...");
        });
    };
    fetchPosts();
  }, []);



  return (
    <>
      <div className="flex flex-col bg-slate-500  overflow-y-scroll overflow-x-hidden scrollbar-hide m-4 p-3 items-center rounded-md  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out h-2/6 ">


        {
          userData.map((usr , index)=>{
            return <PeoplebarProfileButton key={index} user={usr}/>
          })
        }
      </div>
    </>
  );
};

export default People;
