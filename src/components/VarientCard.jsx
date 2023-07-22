import React from "react";


const VarientCard = ({setSelectedSize , vrnt , product , setProductImage , setSelectedVariantData }) => {
  return (
    <div

      onClick={()=>{
        setSelectedSize("")
        setProductImage(vrnt.image);
        setSelectedVariantData(()=>{
          return {
            selectedVrntName : vrnt.color,
            vrntPrice : vrnt.price,
          }
        })
      }}

      key={vrnt._id}
      className="cursor-pointer w-full max-w-sm my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 "
    >
      <div >
        <img
          className="p-8 rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
          src={vrnt.image}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <div>
          <p className="text-white">{product.title}</p>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {vrnt.color}
          </h5>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="text-white font-medium rounded-lg text-xl px-5 py-2.5 text-center "
          >
            PRICE :
          </div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.price} ৳
          </span>
        </div>
      </div>
    </div>
  );
};

export default VarientCard;
