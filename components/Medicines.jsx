import React from "react";

export default function Medicines() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-4  py-4 
        `}
    >
      <div
        className={`w-full h-50 rounded-xl flex flex-col gap-5 justify-center px-3 md:px-5
           bg-white border border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 
           `}
      >
        <div className={`flex flex-col gap-5`}>
          <span className={`flex flex-col gap-3`}>
            <span className={`text-lg md:text-xl font-bold`}>
              Paracetamol 500mg
            </span>
            <span className={`bg-blue-100 text-blue-600 w-fit px-3 rounded-lg`}>
              Pain Relief
            </span>
            <span className={`text-md text-gray-600`}>
              Effective pain and fever relief
            </span>
          </span>
        </div>
        <div className={`flex justify-between items-center w-full`}>
          <span className={`text-xl font-bold text-blue-600`}>$5.99</span>
          <button className={`bg-blue-600 text-white font-bold p-2 rounded-md`}>
            Add to Cart
          </button>
        </div>
      </div>


    </div>
  );
}
