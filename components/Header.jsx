import React from "react";
import pharm from "../src/assets/pharmacy.svg";
import home from "../src/assets/home.svg";
import { Link } from "react-router";
export default function Header() {
  return (
    <div className={`bg-white h-25 pt-3 px-1 flex flex-col gap-1 md:flex-row md:p-0
    md:justify-between items-center md:px-5
    shadow-lg shadow-gray-300 
    `}>
      <div className={`flex items-center gap-2`}>
        <img src={pharm} alt="" className={`w-10`} />
        <h1 className={`font-bold text-xl md:text-2xl lg:text-3xl`}>
        
          Almasrya Farmacy
        </h1>
      </div>
      <div className={`flex justify-center items-center gap-3`}>
        <div className={`flex justify-center items-center gap-1`}>
          <img src={home} alt="" className={`w-5`} />
          <Link to={"/"} className={`text-gray-500`}>
            Home
          </Link>
        </div>
        <button className={`bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700`}>Login</button>
      </div>
    </div>
  );
}
