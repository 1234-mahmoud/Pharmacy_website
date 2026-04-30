import React from "react";

import Cart from "../components/Cart";
import Search from "../components/Search";

export default function Cashier() {
  return (
    <div className={`container mx-auto mb-10 flex flex-col gap-5`}>
      <h1
        className={`text-center my-10 text-2xl md:text-3xl lg:text-4xl font-bold`}
      >
        Cashier Dashboard
      </h1>
      <div
        className={`w-full h-full rounded-xl flex flex-col gap-5 items-center p-5
             bg-white shadow-2xl relative 
             `}
      >
        <div className={`w-full flex flex-col gap-5`}>
          <span className={`text-xl font-bold`}>Available Medicines</span>

       {/* Search */}
       <Search/>
          {/* line braek */}
          <span className="line_break"></span>
        </div>

        {/* Medicines */}
        <div
          className={`w-full flex flex-col lg:flex-row justify-between items-center  py-5`}
        >
          <div
            className={`w-full h-35 rounded-xl flex justify-between items-center px-3 md:px-10
        bg-white border border-gray-300 hover:border-blue-400
        `}
          >
            <div className={`flex flex-col gap-5`}>
              <span className={`text-lg md:text-xl font-bold`}>
                Paracetamol 500mg
              </span>
              <span className={`flex flex-col gap-1`}>
                <span className={`text-xl font-bold text-blue-600`}>$5.99</span>
                <span className={`text-md text-gray-600`}>Stock: 150</span>
              </span>
            </div>
            <button
              className={`bg-blue-600 text-white font-bold w-15 p-2 rounded-md`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Cart */}
      <Cart />
    </div>
  );
}
