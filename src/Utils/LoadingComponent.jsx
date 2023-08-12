import React from "react";

const LoadingComponent = () => {
  return (
    <div className="z-50 min-h-screen w-full flex justify-center items-center bg-slate-900 bg-opacity-50 fixed top-0 left-0">
      <div className="text-4xl font-bold text-white ">Loading...</div>
    </div>
  );
};

export default LoadingComponent;
