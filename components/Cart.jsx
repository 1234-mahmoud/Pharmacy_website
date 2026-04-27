import React from "react";
import cart_pic from "../src/assets/cart.svg";
export default function Cart() {
  return (
    <div
      className={`relative w-full rounded-xl  p-5
        bg-white shadow-2xl shadow-gray-500 `}
    >
      <div className={`flex items-center gap-2 `}>
        <img src={cart_pic} alt="" className="w-7" />
        <span className={`text-xl font-bold`}>Current Sale</span>
      </div>
      <hr className={`absolute top-20 left-0 w-full h-px bg-gray-300 border-0`}/>
      <div
        className={`flex flex-col lg:flex-row justify-between items-center gap-10  py-5`}
      >
        <div
          className={`
            my-10
        `}
        >
          <span>Cart is Empty</span>
        </div>
      </div>
    </div>
  );
}
