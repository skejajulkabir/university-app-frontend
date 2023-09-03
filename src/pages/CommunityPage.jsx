import React from "react";
import BloodDonation from "../components/Leftsidebar componets/BloodDonation";
import { Link } from "react-router-dom";

const CommunityPage = () => {
  return (
    <>
      <div className="pt-36 lg:pt-24 px-2">
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <div className="bg-slate-400 w-full md:w-12/12 h-2/4 ">
            <Link to="/blooddonation">
              <BloodDonation />
            </Link>



            <Link to="/underdevelopment">
              <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                

                <div className="ml-1 w-5/6">
                  <div className="ml-4 text-lg font-semibold">
                    Departmental Private Zone(BETA)
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
