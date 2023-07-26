import React from "react";
import { Link } from "react-router-dom";

const TshirtCard = ({ item }) => {
  return (
    <>
      
      <Link
        to={`/product/${item._id}`}
        className="p-1 w-1/2 sm:p-4  md:w-1/3 xl:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <div className="shadow-lg">
          <div className="block relative  rounded-md overflow-hidden">
            {/* <div className="block relative h-fit  rounded overflow-hidden"> */}
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block m-auto"
              src={item.img}
            />
          </div>
          <div className="mt-4 p-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {item.category}
            </h3>
            <p className="mt-1 bg-slate-50 hidden md:block ">
              SIZE<span className="text-xs">(available)</span>:{" "}
              M,L,XL,XXL
            </p>
            <h2 className="text-gray-900 title-font text-lg font-medium truncate">
              {item.title}
            </h2>
            <p className="mt-1">Price: ৳{item.price}</p>
          </div>
        </div>
      </Link>



{/* <Link
        to={"/product/:id"}
        className="p-1 w-1/3 sm:p-4  md:w-1/4 lg:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <div className="shadow-lg ">
          <div className="block p-2 relative h-fit  rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block m-auto"
              src="https://static-01.daraz.com.bd/p/2e77d934b384f171c7c8bad49af0e63e.jpg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              T-SHIRTS
            </h3>
            <p className="mt-1 bg-slate-50">SIZE: M,L,XL,XXL</p>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              WEAR THE CODE!
            </h2>
            <p className="mt-1">৳500</p>
          </div>
        </div>
      </Link> */}
    </>
  );
};

export default TshirtCard;
