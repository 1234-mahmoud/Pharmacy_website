import React from "react";
import Search from "../components/Search";
import Medicines from "../components/Medicines";
import MyOrders from "../components/MyOrders";

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

          {/* Search / filter */}
          <div className={`w-full h-full rounded-xl grid grid-cols-1 md:grid-cols-2  gap-2 p-5
                bg-white shadow-2xl relative `}>
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
        

        {/* Medicines */}
   
         <Medicines/>
        {/* ------------------------------------------- */}
        {/* Orders */}
        <MyOrders/>
      </div>
    </div>
  );
}
