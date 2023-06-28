import React from "react";
import AdProductItem from "./AdProductItem";
import { Link } from "react-router-dom";

const FeaturedProductAd = () => {
  return (
    <>
      <Link to='/shop'>
        <div className="flex flex-row bg-slate-500 w-96 h-fit featured-product-showcase overflow-y-hidden overflow-x-scroll  m-4 p-3 items-center rounded-md mt-24 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ">

          <AdProductItem/>
          {/* <AdProductItem/>
          <AdProductItem/>
          <AdProductItem/>
          <AdProductItem/> */}
          
        </div>
      </Link>
    </>
  );
};

export default FeaturedProductAd;
