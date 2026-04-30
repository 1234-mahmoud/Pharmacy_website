import React from "react";
import Search from "../components/Search";

export default function User() {
  return (
    <div className={`w-full mx-auto mb-10 flex flex-col gap-5`}>
      {/* Header */}
      <div className={`bg-blue-600 text-white py-5 px-2 md:px-7 lg:px-30`}>
        <h1 className={`my-1 text-xl md:text-3xl lg:text-4xl font-bold`}>
          Welcome to Almasrya Pharmacy
        </h1>
        <p className={`text-gray-100`}>
          Browse and order your medications online
        </p>
      </div>
      <div className={`container m-auto flex flex-col gap-3 px-3`}>
        <div
          className={`w-full h-full rounded-xl flex flex-col gap-2 items-center p-5
                bg-white shadow-2xl relative 
                `}
        >
          {/* Search / filter */}
          <div className={`w-full flex flex-col gap-5`}>
          <Search/>

            <select
              name=""
              id=""
              className={`border border-gray-400  p-3 rounded-md
              transition-all ease-in-out duration-200 focus-within:outline-blue-500 focus-within:outline-2
              `}
            >
              <option value="">All</option>
              <option value="">Medicine1</option>
              <option value="">Medicine2</option>
              <option value="">Medicine3</option>
              <option value="">Medicine4</option>
            </select>
          </div>
        </div>

        {/* Medicines */}
        <div
          className={`w-full flex flex-col lg:flex-row justify-between items-center  py-5 `}
        >
          <div
            className={`w-full h-50 rounded-xl flex flex-col gap-5 justify-center px-3 md:px-10
           bg-white border border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 
           `}
          >
            <div className={`flex flex-col gap-5`}>
              <span className={`flex flex-col gap-3`}>
                <span className={`text-lg md:text-xl font-bold`}>
                  Paracetamol 500mg
                </span>
                <span
                  className={`bg-blue-100 text-blue-600 w-fit px-3 rounded-lg`}
                >
                  Pain Relief
                </span>
                <span className={`text-md text-gray-600`}>
                  Effective pain and fever relief
                </span>
              </span>
            </div>
            <div className={`flex justify-between items-center w-full`}>
              <span className={`text-xl font-bold text-blue-600`}>$5.99</span>
              <button
                className={`bg-blue-600 text-white font-bold p-2 rounded-md`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
      </div>
    </div>
  );
}
