import React from 'react';

const DonatePage = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-300 flex items-center justify-center">
        <div className="w-4/5">
          <div className="p-20 bg-slate-500 w-full text-slate-100 text-center text-5xl">
            Donate Page
          </div>
          <div className="my-3 rounded-md text-3xl bg-slate-400 p-10">
            If you would like to support our website's availability and contribute to the community, you can make a donation using the provided Bkash number.
          </div>
          <div className="my-3 rounded-md text-3xl bg-slate-400 p-10">
            Our website is built on the MERN stack, and such sites require advanced hosting services. Specifically, this site is hosted on a Virtual Private Server (VPS). These hosting services are more expensive than conventional shared services.
          </div>
          <div className="my-3 rounded-md text-3xl bg-slate-400 p-10">
            Your contribution will greatly assist our community in maintaining and running the system smoothly.
          </div>

        <div className="text-6xl font-bold text-white bg-slate-700 p-28 flex flex-row items-center justify-center">
            <div className="">
                Bkash :
            </div>
            <div className="text-red-200 pl-10">
                01401475571
            </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default DonatePage;
